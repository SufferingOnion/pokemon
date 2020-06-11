module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pokemon/'
    : '/'
    ,
  runtimeCompiler: true,
  outputDir: 'docs',
}