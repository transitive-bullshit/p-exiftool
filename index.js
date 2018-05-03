'use strict'

const execa = require('execa')
const toCamelCase = require('to-camel-case')

const customKeys = {
  'MIMEType': 'mimeType',
  'GIFVersion': 'gifVersion'
}

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
        const customKey = customKeys[key]

        output[customKey || toCamelCase(key)] = value
      })

      return output
    })

  if (results.length === 1) {
    return results[0]
  } else {
    return results
  }
}
