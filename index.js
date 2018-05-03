'use strict'

const execa = require('execa')
const toCamelCase = require('camelcase')

module.exports = async (...args) => {
  const cmd = await execa('exiftool', [
    '-j',
    '-n',
    ...args
  ])

  const results = JSON.parse(cmd.stdout)
    .map((result) => {
      const output = { }

      Object.entries(result).forEach(([ key, value ]) => {
        output[toCamelCase(key)] = value
      })

      return output
    })

  if (results.length === 1) {
    return results[0]
  } else {
    return results
  }
}
