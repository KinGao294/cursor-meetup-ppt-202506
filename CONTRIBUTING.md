# 贡献指南

感谢您对 Interactive Cursor PPT 项目的关注和贡献！

## 🤝 如何贡献

### 报告问题
如果您发现了 bug 或有功能建议，请：
1. 在 [Issues](https://github.com/yourusername/cursor-ppt-presentation/issues) 中搜索是否已有相关问题
2. 如果没有，创建一个新的 Issue，并详细描述：
   - 问题的详细描述
   - 复现步骤
   - 预期行为
   - 实际行为
   - 浏览器版本和操作系统
   - 相关截图（如有）

### 提交代码
1. **Fork 项目**
   ```bash
   git fork https://github.com/yourusername/cursor-ppt-presentation.git
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或者
   git checkout -b fix/your-bug-fix
   ```

3. **进行修改**
   - 保持代码风格一致
   - 添加必要的注释
   - 测试您的修改

4. **提交代码**
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   # 或者
   git commit -m "fix: 修复某个bug"
   ```

5. **推送到您的仓库**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   - 在 GitHub 上创建 Pull Request
   - 详细描述您的更改
   - 引用相关的 Issue（如有）

## 📝 代码规范

### HTML 规范
- 使用语义化标签
- 保持良好的缩进（2个空格）
- 属性使用双引号
- 自闭合标签使用 `/>`

### CSS 规范
- 使用 BEM 命名规范（推荐）
- 保持选择器简洁
- 使用 CSS 变量定义颜色
- 移动端优先的响应式设计

### JavaScript 规范
- 使用 ES6+ 语法
- 使用 camelCase 命名变量和函数
- 使用 PascalCase 命名构造函数
- 添加适当的注释

### 提交消息规范
使用 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 格式：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

类型包括：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构代码
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat(editor): 添加撤销/重做功能
fix(navigation): 修复在移动端的导航问题
docs: 更新README中的使用说明
```

## 🎯 开发重点

### 优先级功能
1. **性能优化**
   - 减少 DOM 操作
   - 优化图片加载
   - 代码分割

2. **用户体验**
   - 更好的错误提示
   - 加载状态指示
   - 操作反馈

3. **功能增强**
   - 更多主题选择
   - 导出为 PDF
   - 多语言支持
   - 协作编辑

### 技术债务
- 代码重构和模块化
- 添加单元测试
- 提升代码覆盖率
- 性能监控

## 🧪 测试

### 手动测试
在提交前，请确保：
- [ ] 所有幻灯片正常显示
- [ ] 编辑功能正常工作
- [ ] 图片上传和替换功能正常
- [ ] 键盘快捷键正常工作
- [ ] 响应式布局在不同设备上正常
- [ ] 本地存储功能正常

### 浏览器兼容性
请在以下浏览器中测试：
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

### 移动端测试
- iOS Safari
- Android Chrome
- 各种屏幕尺寸

## 🏗️ 项目结构

```
cursor-ppt-presentation/
├── cursor-ppt-presentation.html    # 主文件
├── README.md                       # 项目说明
├── LICENSE                         # 许可证
├── CONTRIBUTING.md                 # 贡献指南
├── .gitignore                      # Git忽略文件
└── screenshots/                    # 演示截图
```

## 📚 学习资源

- [HTML5 规范](https://html.spec.whatwg.org/)
- [CSS Grid 布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [JavaScript ES6+](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [Web API 文档](https://developer.mozilla.org/zh-CN/docs/Web/API)

## 🆘 获取帮助

如果您在贡献过程中遇到问题：
1. 查看项目的 [Issues](https://github.com/yourusername/cursor-ppt-presentation/issues)
2. 查看 [README.md](README.md) 文档
3. 在 Issue 中提问
4. 联系维护者：微信 A55555555557

## 🎖️ 贡献者

感谢所有为这个项目做出贡献的开发者！

<!-- 这里可以添加贡献者列表 -->

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT 许可证](LICENSE) 下发布。

---

再次感谢您的贡献！🙏 