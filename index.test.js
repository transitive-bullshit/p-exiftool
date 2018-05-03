'use strict'

const { test } = require('ava')
const fs = require('fs')
const path = require('path')

const exiftool = require('.')

const fixturesPath = path.join(__dirname, `media`)

const keyBlacklist = new Set([
  'directory',
  'sourceFile',
  'exifToolVersion',
  'fileModifyDate',
  'fileAccessDate',
  'fileInodeChangeDate',
  'filePermissions',
  'megapixels'
])

function filter (result) {
  return Object
    .entries(result)
    .filter(([ key, value ]) => !keyBlacklist.has(key))
    .reduce((acc, [ key, value ]) => {
      acc[key] = value
      return acc
    }, { })
}

fs.readdirSync(fixturesPath)
  .filter((filename) => {
    return /[^.]+\.[^.]+$/.test(filename)
  })
  .forEach((filename) => {
    const input = path.join(fixturesPath, filename)

    test(`${filename} metadata`, async (t) => {
      const metadata = await exiftool(input)
      const filtered = filter(metadata)
      console.log(JSON.stringify(filtered, null, 2))
      t.snapshot(filtered)
    })
  })
