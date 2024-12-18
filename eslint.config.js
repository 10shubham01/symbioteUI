const antfu = require('@antfu/eslint-config')

module.exports = antfu.default({
  react: true,
  rules: {
    'react/no-array-index-key': ['off'],
  },
})
