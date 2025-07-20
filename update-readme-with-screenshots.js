// 自动更新README添加截图预览的脚本
// 运行此脚本会检查screenshots/slides/文件夹中的图片文件，并自动更新README

const fs = require('fs');
const path = require('path');

// 配置信息
const CONFIG = {
    readmePath: 'README.md',
    screenshotsDir: 'screenshots/slides/',
    previewSectionTitle: '## 📸 PPT 效果预览',
    
    // 要展示的关键页面
    keySlides: [
        { file: 'slide-01.png', title: '开场页面', description: '用Cursor赋能视频创作 - 北京Meetup现场演示' },
        { file: 'slide-04.png', title: '核心观点展示', description: '分析做自媒体视频账号的三大痛点' },
        { file: 'slide-06.png', title: '解决方案流程', description: '展示科学完整的创作流程' },
        { file: 'slide-08.png', title: '实战应用场景', description: 'Cursor能赋能视频创作的五大核心应用场景' }
    ]
};

/**
 * 检查截图文件是否存在
 */
function checkScreenshots() {
    console.log('🔍 检查截图文件...');
    
    if (!fs.existsSync(CONFIG.screenshotsDir)) {
        console.error(`❌ 截图文件夹不存在: ${CONFIG.screenshotsDir}`);
        return { exists: false, files: [] };
    }
    
    const files = fs.readdirSync(CONFIG.screenshotsDir)
        .filter(file => file.endsWith('.png') && file.startsWith('slide-'))
        .sort();
    
    console.log(`📊 找到 ${files.length} 个截图文件`);
    files.forEach(file => console.log(`  ✅ ${file}`));
    
    return { exists: files.length > 0, files };
}

/**
 * 生成截图预览的Markdown内容
 */
function generatePreviewContent(screenshots) {
    const { exists, files } = screenshots;
    
    if (!exists || files.length === 0) {
        return `### 🎯 如何查看PPT页面效果？

**方法1：直接运行PPT**
- 双击 \`cursor-ppt-presentation.html\` 文件
- 在浏览器中浏览所有17页内容
- 体验完整的交互功能

**方法2：生成静态截图**
- 运行 \`capture-slides.js\` 脚本
- 自动生成所有页面的高清截图
- 保存到 \`screenshots/slides/\` 文件夹

### 📋 PPT页面内容概览

| 页面 | 主要内容 | 亮点功能 |
|------|----------|----------|
| **第1页** | 🎤 开场 - 用Cursor赋能视频创作 | 炫酷的科技风主题 |
| **第4页** | 📊 三大痛点 - 做自媒体视频账号的困境 | 问题分析可视化 |
| **第6页** | 🔄 创作流程 - 科学完整的创作流程 | 流程图交互展示 |
| **第8页** | 🎯 应用场景 - Cursor赋能视频创作的五大场景 | 核心价值展示 |
| **第17页** | 📞 联系方式与二维码 | 完整联系信息 |

> 🚀 **一键生成截图**: 运行截图脚本后，这里将自动显示所有页面的高清预览图！  
> 📖 **详细指南**: 查看 [SCREENSHOT_GUIDE.md](SCREENSHOT_GUIDE.md) 了解如何快速生成截图`;
    }
    
    // 有截图文件时，生成预览内容
    let content = `以下是PPT的部分页面效果（[查看完整${files.length}页截图](screenshots/slides/)）：

`;
    
    // 添加关键页面的预览
    CONFIG.keySlides.forEach(slide => {
        if (files.includes(slide.file)) {
            content += `### ${slide.title}
![${slide.title}](${CONFIG.screenshotsDir}${slide.file})
*${slide.description}*

`;
        }
    });
    
    content += `### 📊 完整页面列表

<details>
<summary>📋 点击展开查看所有${files.length}页截图</summary>

`;
    
    // 添加所有页面的列表
    files.forEach((file, index) => {
        const pageNum = index + 1;
        content += `| ![第${pageNum}页](${CONFIG.screenshotsDir}${file}) |\n`;
        content += `|:---:|\n`;
        content += `| **第${pageNum}页** - [${file}](${CONFIG.screenshotsDir}${file}) |\n\n`;
    });
    
    content += `</details>

> 💡 **提示**: 点击图片可以查看高清版本。所有截图都采用1920x1080分辨率，完美展示了Cursor制作PPT的专业效果。

### 🎯 如何更新截图？

如果您修改了PPT内容，可以：
1. 运行 \`capture-slides.js\` 重新生成截图
2. 运行 \`node update-readme-with-screenshots.js\` 更新README
3. 提交更改：\`git add . && git commit -m "📸 更新PPT截图" && git push\``;
    
    return content;
}

/**
 * 更新README文件
 */
function updateReadme() {
    console.log('📖 读取README文件...');
    
    if (!fs.existsSync(CONFIG.readmePath)) {
        console.error(`❌ README文件不存在: ${CONFIG.readmePath}`);
        return false;
    }
    
    let readmeContent = fs.readFileSync(CONFIG.readmePath, 'utf8');
    
    // 检查截图文件
    const screenshots = checkScreenshots();
    
    // 生成新的预览内容
    const newPreviewContent = generatePreviewContent(screenshots);
    
    // 查找预览章节的位置
    const sectionStart = readmeContent.indexOf(CONFIG.previewSectionTitle);
    if (sectionStart === -1) {
        console.error(`❌ 未找到预览章节: ${CONFIG.previewSectionTitle}`);
        return false;
    }
    
    // 找到下一个二级标题的位置
    const nextSectionStart = readmeContent.indexOf('\n## ', sectionStart + CONFIG.previewSectionTitle.length);
    const sectionEnd = nextSectionStart === -1 ? readmeContent.length : nextSectionStart;
    
    // 替换预览章节内容
    const newReadmeContent = 
        readmeContent.substring(0, sectionStart) +
        CONFIG.previewSectionTitle + '\n\n' +
        newPreviewContent + '\n\n' +
        readmeContent.substring(sectionEnd);
    
    // 写入文件
    fs.writeFileSync(CONFIG.readmePath, newReadmeContent, 'utf8');
    
    if (screenshots.exists) {
        console.log(`✅ README已更新，添加了${screenshots.files.length}页截图预览`);
        console.log('📋 预览了以下关键页面：');
        CONFIG.keySlides.forEach(slide => {
            if (screenshots.files.includes(slide.file)) {
                console.log(`   🎯 ${slide.title} (${slide.file})`);
            }
        });
    } else {
        console.log('📝 README已更新，显示截图生成指南');
        console.log('💡 生成截图后请再次运行此脚本来添加预览图');
    }
    
    return true;
}

/**
 * 主函数
 */
function main() {
    console.log('🚀 开始更新README截图预览...\n');
    
    try {
        const success = updateReadme();
        
        if (success) {
            console.log('\n🎉 README更新完成！');
            console.log('\n📋 下一步操作：');
            console.log('1. 检查README效果：cat README.md | grep -A 10 "PPT 效果预览"');
            console.log('2. 提交更改：git add README.md && git commit -m "📸 更新PPT截图预览"');
            console.log('3. 推送到GitHub：git push');
        } else {
            console.log('\n❌ README更新失败，请检查错误信息');
            process.exit(1);
        }
    } catch (error) {
        console.error('\n💥 脚本运行出错：', error.message);
        process.exit(1);
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

// 导出函数供其他脚本使用
module.exports = {
    checkScreenshots,
    generatePreviewContent,
    updateReadme,
    CONFIG
}; 