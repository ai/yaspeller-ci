#!/usr/bin/env node

'use strict'

function jobNumber () {
  if (process.env.TRAVIS) {
    return process.env.TRAVIS_JOB_NUMBER.split('.')[1]
  } else {
    return '1'
  }
}

if (jobNumber() === '1') {
  require('yaspeller/lib/cli')
} else {
  console.warn('To speed up CI spelling check runs only in first job')
}
