'use strict'

const { get } = require('got')
const { json, send } = require('micro')
const generatePage = require('./lib/generate-page')

module.exports = async (request, response) => {
  const skoleskyss = await get('https://tfk-livestats.firebaseio.com/skoleskyss.json', {json: true})
  const minelev = await get('https://tfk-livestats.firebaseio.com/minelev.json', {json: true})
  const tilskudd = await get('https://tfk-stats.firebaseio.com/tilskudd.json', {json: true})
  const skoleskyssData = skoleskyss.body
  const tilskuddData = tilskudd.body
  const minelevData = minelev.body
  send(response, 200, generatePage(minelevData, skoleskyssData, tilskuddData))
}
