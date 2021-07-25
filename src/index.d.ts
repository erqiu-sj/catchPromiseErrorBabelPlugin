/*
 * @Author: 邱狮杰
 * @Date: 2021-07-25 13:41:25
 * @LastEditTime: 2021-07-25 13:42:38
 * @FilePath: /catchPromiseErrorBabelPlugin/src/index.d.ts
 * @Description: 描述
 */
declare module "@babel/helper-module-imports" {
  function addDefault(path: any, importedSource: any, opts: any): any;
  function addNamed(path: any, name: any, importedSource: any, opts: any): any;
  function addNamespace(path: any, importedSource: any, opts: any): any;
  function addSideEffect(path: any, importedSource: any, opts: any): any;
}
