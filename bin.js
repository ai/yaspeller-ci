#!/usr/bin/env node

'use strict'

if (process.env.TRAVIS && parseInt(process.versions.node) < 7) {
  console.warn(
    'To speed up Travis CI tests spelling check runs only on Node.js 7')
} else {
  require('yaspeller/lib/cli')
}
