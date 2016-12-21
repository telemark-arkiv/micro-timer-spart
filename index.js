'use strict'

const { get } = require('got')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  const skoleskyssData = await get('https://tfk-livestats.firebaseio.com/skoleskyss.json', {json: true})
  send(response, 200, skoleskyssData.body)
}
