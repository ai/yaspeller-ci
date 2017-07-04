#!/usr/bin/env node
'use strict'

const ciJobNumber = require('ci-job-number')

if (ciJobNumber() === 1) {
  require('yaspeller/lib/cli')
} else {
  console.warn('To speed up CI spelling check runs only in first job')
}
