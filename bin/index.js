#!/usr/bin/env node
const {readFileSync, writeFileSync} = require('fs')
const {resolve} = require('path')
const harMd = require('../lib/har-to-md')

const path = process.argv[2]
const out = process.argv[3]

if(!path || !out) {
  console.log('Usage: complainhar <source path> <dest path>')
  process.exit(1)
}
const f = readFileSync(resolve(path))
writeFileSync(resolve(out), harMd(f.toString()))
