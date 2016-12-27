'use strict'

const systems = require('../config/systems')

module.exports = (minelev, skoleskyss, tilskudd) => {
  const [skoleskyssFaktor, minelevFaktor, tilskuddFaktor] = systems.map((item) => item.factor)

  const minelevMinutes = minelev.antallVarslerProdusert * minelevFaktor
  const skoleskyssMinutes = skoleskyss.antallSoknader * skoleskyssFaktor
  const tilskuddMinutes = tilskudd.antallTilskudd * tilskuddFaktor

  const timerSpart = (minelevMinutes + skoleskyssMinutes + tilskuddMinutes) / 60

  return `<html><body style="text-align: center"><h1>Timer spart siden 01. august 2016</h1><div style="font-size: 7em">${timerSpart.toFixed(0)}</div></body></html>`
}
