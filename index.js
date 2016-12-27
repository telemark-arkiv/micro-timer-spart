'use strict'

const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')
const systems = require('./config/systems')

module.exports = async (request, response) => {
  const data = await Promise.all(systems.map((item) => get(item.url, {json: true})))
  send(response, 200, generatePage(data.map((site) => site.body)))
}
