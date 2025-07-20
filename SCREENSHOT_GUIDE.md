# 📸 PPT 自动截图指南

本指南将帮您快速生成所有17页PPT的高质量截图，用于项目展示和分享。

## 🎯 截图效果

- **分辨率**: 1920 x 1080 (Full HD)
- **格式**: PNG，无损压缩
- **背景**: 保持原始深色主题
- **命名**: slide-01.png 到 slide-17.png

## 🚀 快速开始

### 方法一：自动化截图（推荐）

1. **打开PPT文件**
   ```bash
   # 双击打开 cursor-ppt-presentation.html
   # 或使用本地服务器
   python -m http.server 8000
   # 然后访问 http://localhost:8000/cursor-ppt-presentation.html
   ```

2. **打开浏览器控制台**
   - Chrome/Edge: 按 `F12` 或 `Cmd/Ctrl + Shift + I`
   - Safari: 按 `Cmd + Alt + I` （需先在设置中启用开发菜单）

3. **运行自动截图脚本**
   
   **第一步 - 加载截图库：**
   ```javascript
   loadHtml2Canvas()
   ```
   
   **第二步 - 开始批量截图：**
   ```javascript
   captureAllSlides()
   ```

4. **等待截图完成**
   - 脚本会自动切换到每一页
   - 每页间隔2秒进行截图
   - 总共需要约40秒完成17页截图
   - 文件会自动下载到浏览器默认下载目录

5. **整理截图文件**
   ```bash
   # 将下载的截图移动到项目文件夹
   mv ~/Downloads/slide-*.png ./screenshots/slides/
   
   # 提交到Git仓库
   git add screenshots/slides/
   git commit -m "📸 添加PPT页面截图"
   git push
   ```

### 方法二：手动截图

如果自动化脚本无法正常工作，可以手动截图：

1. **准备工作**
   - 将浏览器窗口最大化
   - 确保缩放比例为100%
   - 切换到全屏模式（可选）

2. **逐页截图**
   - macOS: `Cmd + Shift + 4`，然后选择PPT区域
   - Windows: `Win + Shift + S`，选择PPT区域
   - 按左右箭头键切换页面

3. **文件命名**
   - 按顺序命名为 `slide-01.png` 到 `slide-17.png`
   - 保存到 `screenshots/slides/` 文件夹

## 🛠️ 故障排除

### 脚本加载失败
```javascript
// 如果 html2canvas 加载失败，可以手动加载
const script = document.createElement('script');
script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
document.head.appendChild(script);
```

### 截图质量问题
- 确保浏览器缩放比例为100%
- 关闭其他标签页释放内存
- 使用Chrome或Edge浏览器以获得最佳效果

### 下载文件管理
```bash
# 批量重命名文件（如果下载的文件名不规范）
for i in {1..17}; do
    mv slide-$i.png slide-$(printf "%02d" $i).png
done

# 检查文件完整性
ls -la screenshots/slides/slide-*.png | wc -l
# 应该显示 17，表示所有文件都已下载
```

## 📊 验证截图质量

生成截图后，请检查：
- [ ] 所有17个文件都已生成
- [ ] 文件大小合理（通常在50KB-500KB之间）
- [ ] 图片清晰无模糊
- [ ] 保持了原始的深色主题
- [ ] 文字和图标清晰可读

## 🎨 后续使用

截图生成后可以用于：
- **README展示**: 在项目说明中插入关键页面
- **社交分享**: 发布到微博、朋友圈等平台
- **文档制作**: 制作使用教程和案例分析
- **演讲备份**: 作为演示的备用方案

## 💡 优化建议

1. **最佳截图时机**: 页面加载完成后等待2-3秒再截图
2. **浏览器选择**: Chrome > Edge > Firefox > Safari
3. **系统性能**: 关闭不必要的程序以确保流畅运行
4. **文件管理**: 定期清理下载文件夹中的临时截图

---

💬 **需要帮助？** 如果在截图过程中遇到问题，请在 [Issues](https://github.com/KinGao294/cursor-meetup-ppt-202506/issues) 中反馈。

🎯 **展示效果**: 生成的截图将完美展示Cursor制作PPT的专业水准！ 