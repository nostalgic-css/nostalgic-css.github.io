// Module imports
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withSCSS = require('@zeit/next-sass')





// Local constants
const isDev = process.env.NODE_ENV !== 'production'





module.exports = withMDX(withSCSS({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}))
