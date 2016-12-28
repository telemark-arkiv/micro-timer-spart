'use strict'

module.exports = {
  skoleskyss: {
    id: 'skoleskyss',
    name: 'Skoleskyss',
    field: 'antallSoknader',
    factor: 30,
    url: 'https://tfk-livestats.firebaseio.com/skoleskyss.json'
  },
  minelev: {
    id: 'minelev',
    name: 'MinElev',
    field: 'antallVarslerProdusert',
    factor: 30,
    url: 'https://tfk-livestats.firebaseio.com/minelev.json'
  },
  tilskudd: {
    id: 'tilskudd',
    name: 'Tilskudd',
    field: 'antallTilskudd',
    factor: 15,
    url: 'https://tfk-stats.firebaseio.com/tilskudd.json'
  }
}
