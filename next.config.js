const path = require('path')
// const withTM = require('next-transpile-modules')(['react-ts-loaders'])

// module.exports = withTM()
module.exports = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
}
