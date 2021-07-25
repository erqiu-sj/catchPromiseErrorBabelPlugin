/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 21:45:27
 * @LastEditTime: 2021-07-25 14:19:01
 * @FilePath: /catchPromiseErrorBabelPlugin/src/test.js
 * @Description: test file
 */
import Core from "@babel/core";
import S from "@babel/helper-plugin-utils";
function A() {
  console.log("what?");
  console.log(Core, S);
}
