'use strict'

module.exports = (data) => {
  const results = data
    .map((line) => `<div style="font-size: 4em">${line.status.toFixed(0)}</div>`)

  return `<html><body style="text-align: center"><h1 style="font-size: 5em"><h1>Timer spart siden 01. august 2016</h1></h1>${results.join('')}</body></html>`
}
