# 2026-10-30 维护记录

- 在兼容范围内更新依赖锁文件；此前的 5 项高危依赖告警降为 0。
- README 补充目录职责、安装、维护和在线文档入口，并增加 EditorConfig。
- 复审修正最低 Node.js 版本为 22.19：锁文件中的 `undici 8.12.3` 要求 `>=22.19.0`。

## 验证范围

- 依赖更新前后的 `npm run build` 均通过，实际环境为 Node.js 24.20.0。
- Node.js 最低版本的声明已与锁文件核对；没有在 Node.js 22.19 下另做运行验证。
- `git diff --check` 通过。
- 未执行完整 TypeScript 类型检查或独立浏览器回归；依赖审计是检查时刻的快照。

[在线维护文档](https://xiaoshecode.github.io/xiaoshecode/repos/xiaoshecode.github.io/)
