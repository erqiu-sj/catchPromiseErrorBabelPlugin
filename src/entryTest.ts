/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 22:09:34
 * @LastEditTime: 2021-07-25 14:42:03
 * @FilePath: /catchPromiseErrorBabelPlugin/src/entryTest.ts
 * @Description: entry Test file
 */
import { parse } from "@babel/parser";
import { transformFromAstSync } from "@babel/core";
import { catchPromiseErrorOptions } from "./types";
// import generate from "@babel/generator";
// import traverse from "@babel/traverse";
import Catch from "./entry";
import { readFileSync } from "fs";
import { resolve } from "path";
const testFileContent = readFileSync(resolve(__dirname, "test.js"), {
  encoding: "utf-8",
});
const ast = parse(testFileContent, {
  sourceType: "unambiguous",
});

// traverse(ast, {});
// @ts-ignore
const { code } = transformFromAstSync(ast, testFileContent, {
  plugins: [[Catch, {} as catchPromiseErrorOptions]],
});
console.log(code);
