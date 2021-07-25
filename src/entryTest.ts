/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 22:09:34
 * @LastEditTime: 2021-07-16 22:20:33
 * @FilePath: /babelPluginTemplate/src/entryTest.ts
 * @Description: entry Test file
 */
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import { readFileSync } from "fs";
import { resolve } from "path";
const testFileContent = readFileSync(resolve(__dirname, "test.js"), {
  encoding: "utf-8",
});
const ast = parse(testFileContent, {
  sourceType: "unambiguous",
});

traverse(ast, {});

const { code, map } = generate(ast);
console.log(code);
