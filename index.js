'use strict'

const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')
const systems = require('./config/systems')

module.exports = async (request, response) => {
  const [skoleskyss, minelev, tilskudd] = await Promise.all(systems.map((item) => get(item.url, {json: true})))
  send(response, 200, generatePage(minelev.body, skoleskyss.body, tilskudd.body))
}
