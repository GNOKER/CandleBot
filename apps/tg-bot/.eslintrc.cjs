const merge = require('deepmerge')
const baseConfig = require('@application/eslint/src/node.eslintrc.cjs')

const config = merge(
  baseConfig,
  {},
)
module.exports = config
