'use strict'

const systems = require('../config/systems')
const totalSum = (prev, actual) => prev + actual

module.exports = (sites) => {
  const minutes = sites.map((site) => {
    let data = systems[site.systemid]
    return site[data.field] * data.factor
  })

  const timerSpart = (minutes.reduce(totalSum, 0)) / 60

  return `<html><body style="text-align: center"><h1>Timer spart siden 01. august 2016</h1><div style="font-size: 7em">${timerSpart.toFixed(0)}</div></body></html>`
}
