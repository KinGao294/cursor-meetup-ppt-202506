# 🚀 快速开始 - PPT截图生成指南

只需3步，为您的PPT项目生成专业的截图预览！

## 🎯 第一步：运行PPT
在浏览器中双击打开 `cursor-ppt-presentation.html` 文件，或者使用本地服务器：
```bash
python -m http.server 8000
# 然后访问 http://localhost:8000/cursor-ppt-presentation.html
```

## 📸 第二步：生成截图
在浏览器中按 `F12` 打开控制台，然后复制粘贴以下代码：

### 一键自动截图（推荐）
```javascript
// 第1步：加载截图库
loadHtml2Canvas()

// 第2步：等待几秒后运行（确保库已加载）
setTimeout(() => captureAllSlides(), 3000)
```

### 手动控制截图
```javascript
// 加载截图库
loadHtml2Canvas()

// 手动开始截图（在控制台看到"✅ html2canvas 库加载完成！"后运行）
captureAllSlides()
```

脚本会自动：
- 切换到每一页PPT
- 生成1920x1080高清截图
- 下载17个PNG文件到浏览器下载文件夹

## 🔄 第三步：整理和更新
将下载的截图移动到项目文件夹并更新README：

```bash
# 移动截图文件
mv ~/Downloads/slide-*.png ./screenshots/slides/

# 自动更新README预览
node update-readme-with-screenshots.js

# 提交到Git
git add . && git commit -m "📸 添加PPT页面截图" && git push
```

## ✅ 完成！

现在您的README会自动显示：
- ✨ 4个关键页面的预览图
- 📋 所有17页的完整截图列表
- 🎯 专业的项目展示效果

---

## 🛠️ 故障排除

### 问题：截图脚本加载失败
**解决方案**：手动加载截图库
```javascript
const script = document.createElement('script');
script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
document.head.appendChild(script);
```

### 问题：下载的文件命名不规范
**解决方案**：批量重命名
```bash
cd ~/Downloads
for i in {1..17}; do mv slide-$i.png slide-$(printf "%02d" $i).png 2>/dev/null; done
```

### 问题：截图效果不佳
**解决方案**：
- 确保浏览器缩放比例为100%
- 使用Chrome或Edge浏览器
- 关闭其他标签页释放内存

### 问题：README预览图不显示
**解决方案**：检查文件路径
```bash
# 检查截图文件是否在正确位置
ls -la screenshots/slides/slide-*.png

# 重新运行README更新
node update-readme-with-screenshots.js
```

---

## 🌟 高级用法

### 只截取当前页面
```javascript
captureCurrentSlide()
```

### 检查截图文件状态
```bash
node -e "console.log(require('./update-readme-with-screenshots.js').checkScreenshots())"
```

### 自定义截图分辨率
在 `capture-slides.js` 中修改：
```javascript
width: 1920,  // 宽度
height: 1080, // 高度
scale: 2,     // 缩放比例
```

---

💡 **提示**: 这个工具展示了Cursor在自动化工作流程方面的强大能力。从PPT制作到截图生成，再到文档更新，完全自动化！ 