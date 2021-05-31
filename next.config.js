const path = require('path')
// const withTM = require('next-transpile-modules')(['react-ts-loaders'])

// module.exports = withTM()
module.exports = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   images: {
      domains: ['cdn.sanity.io'],
   },
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack'],
      })

      return config
   },
}
