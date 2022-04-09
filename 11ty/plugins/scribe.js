module.exports = conf => {
  /**
   * Scribe is loaded in its own file here to make it easier to
   * customize its behavior (if you like).
   */
  conf.addPlugin(require('@11in/scribe'), {
    markdown: engine => {
      engine.use(require('markdown-it-deflist'))
      return engine
    }
  })
}
