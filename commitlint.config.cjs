/** 使用 export default 导出将报错提示：
 * Instead change the require of commitlint.config.js。
 * xxx.loeader.js to a dynamic import() which is available in all CommonJS modules.
 * 告知提示：需要将配置文件 commitlint.config.js 改为 commitlint.config.cjs，并且用 module.export 导出。
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 自定义 git commit 提交类型的枚举集
  rules: {
    'type-enum': [
      2,
      'always',
      [
        `feat`,
        `fix`,
        `docs`,
        `perf`,
        `test`,
        `build`,
        `revert`,
        `chore`,
        `format`,
        `refactor`,
      ],
    ],
    // 简要描述提交内容字符大小写限制
    'subject-case': [0],
    'bod-max-inline-length': [2, 'always', 10]
  },
};
