'use strict'

const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')
const systems = require('./config/systems')
const totalSum = (prev, actual) => prev + actual

module.exports = async (request, response) => {
  const data = await Promise.all(Object.keys(systems).map((itemKey) => get(systems[itemKey].url, {json: true})))
  const minutterSpart = data
                          .map((response) => response.body)
                          .map((site) => Object.assign(site, systems[site.systemid]))
                          .map((system) => system[system.field] * system.factor)
                          .reduce(totalSum, 0)

  const timerSpart = minutterSpart / 60

  send(response, 200, generatePage(timerSpart))
}
