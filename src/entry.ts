/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 21:45:47
 * @LastEditTime: 2021-07-16 22:08:43
 * @FilePath: /babelPluginTemplate/src/entry.ts
 * @Description: entry
 */
import { declare } from "@babel/helper-plugin-utils";
import type { BabelAPI } from "@babel/helper-plugin-utils";
// @ts-ignore
export default declare((api: BabelAPI, _option: any, _dirName: string) => {
  api.assertVersion(7);
  return {
    visitor() {},
  };
});
