'use strict'

module.exports = (minelev, skoleskyss, tilskudd) => {
  const minelevFaktor = 30
  const skoleskyssFaktor = 30
  const tilskuddFaktor = 15

  const minelevMinutes = minelev.antallVarslerProdusert * minelevFaktor
  const skoleskyssMinutes = skoleskyss.antallSoknader * skoleskyssFaktor
  const tilskuddMinutes = tilskudd.antallTilskudd * tilskuddFaktor

  const timerSpart = (minelevMinutes + skoleskyssMinutes + tilskuddMinutes)/60

  return `<html><body><h1>${timerSpart.toFixed(0)} timer spart</h1></body></html>`
}