'use strict'

const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')
const urls = [
  'https://tfk-livestats.firebaseio.com/skoleskyss.json',
  'https://tfk-livestats.firebaseio.com/minelev.json',
  'https://tfk-stats.firebaseio.com/tilskudd.json'
]

module.exports = async (request, response) => {
  const [skoleskyss, minelev, tilskudd] = await Promise.all(urls.map((url) => get(url, {json: true})))
  const skoleskyssData = skoleskyss.body
  const tilskuddData = tilskudd.body
  const minelevData = minelev.body
  send(response, 200, generatePage(minelevData, skoleskyssData, tilskuddData))
}
