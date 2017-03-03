#!/usr/bin/env node

'use strict'

if (process.env.TRAVIS && parseInt(process.versions.node) < 7) {
  console.warn(
    'To speed up Travis CI tests spelling check runs only on Node.js 7')
} else {
  const BLACKLIST = /\.js\.html$/
  process.argv = process.argv.filter(i => !BLACKLIST.test(i))
  require('yaspeller/lib/cli')
}
