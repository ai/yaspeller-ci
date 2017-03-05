#!/usr/bin/env node

'use strict'

const job = (process.env.TRAVIS_JOB_NUMBER || '1.1').split('.')[1]
if (process.env.TRAVIS && job !== '1') {
  console.warn(
    'To speed up Travis CI tests spelling check runs only in first job')
} else {
  require('yaspeller/lib/cli')
}
