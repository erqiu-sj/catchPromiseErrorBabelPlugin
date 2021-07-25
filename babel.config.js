/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 21:47:49
 * @LastEditTime: 2021-07-25 14:07:36
 * @FilePath: /catchPromiseErrorBabelPlugin/babel.config.js
 * @Description: babel config
 */
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: {
          // edge: "17",
          // firefox: "60",
          chrome: "79",
          // safari: "11.1",
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
  ];
  const plugins = [];

  return { presets, plugins };
};
