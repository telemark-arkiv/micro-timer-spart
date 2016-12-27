'use strict'

module.exports = [
  {
    name: 'Skoleskyss',
    field: 'antallSoknader',
    factor: 30,
    url: 'https://tfk-livestats.firebaseio.com/skoleskyss.json'
  },
  {
    name: 'MinElev',
    field: 'antallVarslerProdusert',
    factor: 30,
    url: 'https://tfk-livestats.firebaseio.com/minelev.json'
  },
  {
    name: 'Tilskudd',
    field: 'antallTilskudd',
    factor: 15,
    url: 'https://tfk-stats.firebaseio.com/tilskudd.json'
  }
]
