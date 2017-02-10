'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const renderPage = require('./lib/render-page')
const totalSum = (prev, actual) => prev + actual

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  if (pathname === '/json' || pathname === '/html') {
    const systems = (await get('https://systems.config.tfk.allthethings.win', {json: true})).body
    const collectData = async itemKey => Object.assign({systemid: itemKey, response: await get(systems[itemKey].url, {json: true})})
    const data = await Promise.all(Object.keys(systems).map(collectData))
    const minutterSpart = data
      .map(item => Object.assign(item.response.body, systems[item.systemid]))
      .map(system => system[system.field] * system.factor)
      .reduce(totalSum, 0)

    const results = [{name: 'Timer spart', status: minutterSpart / 60}]

    if (pathname === '/json') {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      send(response, 200, results)
    } else if (pathname === '/html') {
      send(response, 200, renderPage(results))
    }
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
