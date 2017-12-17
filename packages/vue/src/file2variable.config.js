module.exports = {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  /**
   * @argument {string} file
   */
  handler: file => {
    if (file.endsWith('tree.template.html')) {
      return {
        type: 'vue',
        name: 'Tree<any>',
        path: './index'
      }
    }
    if (file.endsWith('node.template.html')) {
      return {
        type: 'vue',
        name: 'Node<any>',
        path: './index'
      }
    }
    return { type: 'text' }
  },
  out: 'packages/vue/src/variables.ts'
}
