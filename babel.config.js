/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 21:47:49
 * @LastEditTime: 2021-07-16 21:51:05
 * @FilePath: /babelPluginTemplate/babel.config.js
 * @Description: babel config
 */
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: {
          ie: "6",
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
  ];
  const plugins = [];

  return { presets, plugins };
};
