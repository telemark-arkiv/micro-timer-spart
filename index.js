'use strict'

const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')
const totalSum = (prev, actual) => prev + actual

module.exports = async (request, response) => {
  const query = parse(request.url, true).query
  const format = query ? query.format : false
  const systems = (await get('https://systems.config.tfk.allthethings.win', {json: true})).body
  const data = await Promise.all(Object.keys(systems).map((itemKey) => get(systems[itemKey].url, {json: true})))
  const minutterSpart = data
                          .map((response) => response.body)
                          .map((site) => Object.assign(site, systems[site.systemid]))
                          .map((system) => system[system.field] * system.factor)
                          .reduce(totalSum, 0)

  const results = {timerSpart: minutterSpart / 60}

  send(response, 200, format === 'json' ? results : generatePage(results))
}
