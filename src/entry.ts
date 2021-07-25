/*
 * @Author: 邱狮杰
 * @Date: 2021-07-16 21:45:47
 * @LastEditTime: 2021-07-25 14:59:27
 * @FilePath: /catchPromiseErrorBabelPlugin/src/entry.ts
 * @Description: entry
 */
import { declare } from "@babel/helper-plugin-utils";
import type { BabelAPI } from "@babel/helper-plugin-utils";
import { addNamespace } from "@babel/helper-module-imports";
import { catchPromiseErrorOptions } from "./types";

// @ts-ignore
export default declare(
  (api: BabelAPI, option: catchPromiseErrorOptions, _dirName: string) => {
    api.assertVersion(7);
    return {
      visitor: {
        Program: {
          enter(path) {
            path.traverse({
              ImportDeclaration(curPath) {
                const importSoure = curPath.get("source").node.value;
                if (importSoure === "synchronizationawaiterror") {
                  // 声明的import package name 已导入
                  const specifierPath = curPath.get("specifiers")[0];
                  if (specifierPath.isImportSpecifier())
                    option.SynchronizationAwaitError = specifierPath.toString();
                  path.stop();
                }
              },
            });
            if (!option.SynchronizationAwaitError) {
              option.SynchronizationAwaitError = addNamespace(
                path,
                "synchronizationawaiterror",
                {
                  nameHint: path.scope.generateUid("SynchronizationAwaitError"),
                }
              ).name;
              option.trackerAST = api.template.statement(
                `${option.SynchronizationAwaitError}()`
              )();
            }
          },
        },
        FunctionExpression(path) {
          const fnBody = path.get("body");
          if (fnBody.isBlockStatement()) {
            fnBody.node.body.unshift(option.trackerAST);
          }
        },
      },
    };
  }
);
