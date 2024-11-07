module.exports = {
  /** git commit 提交类型 */
  types: [
    {value: 'feat', name: 'feat:      新增功能'},
    {value: 'fix', name: 'fix:      修复 Bug'},
    {value: 'docs', name: 'docs:      文档变更'},
    {value: 'perf', name: 'perf:      性能优化'},
    {value: 'test', name: 'test:      测试功能'},
    {value: 'build', name: 'build:      项目打包'},
    {value: 'revert', name: 'revert:      版本回滚'},
    {value: 'chore', name: 'chore:      构建1过程或辅助工具变动'},
    {value: 'format', name: 'format:      代码格式(不影响代码运行的变动)'},
    {value: 'refactor', name: 'refactor:      重构(既不是feature,也不是修复 Bug)'}
  ],

  /** git commit 交互提示步骤 */
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围或模块(可选):',
    subject: '请简要描述提交内容(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的 issue (可选):',
    confirmCommit: '查看以上 commit msg, 确认提交? [y/n]'
  },

  // 简要描述提交内容字符长度限制
  subjectLimit: 100

};