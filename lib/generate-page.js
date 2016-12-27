'use strict'

const systems = require('../config/systems')

module.exports = (minelev, skoleskyss, tilskudd) => {
  const systems.map((item) => `${item.name.toLowerCase()}Faktor`) = systems.map((item) = item.factor)
  //const minelevFaktor = 30
  //const skoleskyssFaktor = 30
  //const tilskuddFaktor = 15

  const minelevMinutes = minelev.antallVarslerProdusert * minelevFaktor
  const skoleskyssMinutes = skoleskyss.antallSoknader * skoleskyssFaktor
  const tilskuddMinutes = tilskudd.antallTilskudd * tilskuddFaktor

  const timerSpart = (minelevMinutes + skoleskyssMinutes + tilskuddMinutes) / 60

  return `<html><body style="text-align: center"><h1>Timer spart siden 01. august 2016</h1><div style="font-size: 7em">${timerSpart.toFixed(0)}</div></body></html>`
}
