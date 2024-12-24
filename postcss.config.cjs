/* eslint-env node */
module.exports = {
  plugins: [
    require("postcss-nested"), // 支持嵌套 CSS 语法
    require("postcss-each-variables"), // 用于循环变量
    require("postcss-each")({ // 支持对 CSS 规则的循环
      plugins: {
        beforeEach: [
          require("postcss-for"), // 支持类似 For 循环的语法
          require("postcss-color-mix"), // 提供颜色混合功能
        ],
      },
    }),
  ],
};