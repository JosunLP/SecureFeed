// vue.config.js file to be place in the root of your repository

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },

    runtimeCompiler: true,

    css: {
      sourceMap: true
    }
}
