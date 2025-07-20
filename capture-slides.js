// PPT 自动截图脚本
// 在浏览器控制台中运行此脚本，自动截取每一页PPT

async function captureAllSlides() {
    console.log('🚀 开始自动截取PPT页面...');
    
    // 获取总页数
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    console.log(`📊 总共 ${totalSlides} 页PPT`);
    
    // 创建下载函数
    function downloadImage(canvas, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
    
    // 截图函数
    async function captureSlide(slideIndex) {
        return new Promise((resolve) => {
            // 切换到指定页面
            window.currentSlide = slideIndex;
            window.showSlide(slideIndex);
            
            // 等待页面加载完成
            setTimeout(() => {
                // 使用html2canvas截图（需要先引入库）
                if (typeof html2canvas !== 'undefined') {
                    const slideElement = slides[slideIndex];
                    html2canvas(slideElement, {
                        backgroundColor: '#0a0a0a',
                        width: 1920,
                        height: 1080,
                        scale: 1,
                        useCORS: true
                    }).then(canvas => {
                        const filename = `slide-${String(slideIndex + 1).padStart(2, '0')}.png`;
                        downloadImage(canvas, filename);
                        console.log(`✅ 已截取第 ${slideIndex + 1} 页: ${filename}`);
                        resolve();
                    });
                } else {
                    console.error('❌ 请先加载 html2canvas 库');
                    console.log('💡 在控制台运行: loadHtml2Canvas()');
                    resolve();
                }
            }, 1000);
        });
    }
    
    // 批量截图
    for (let i = 0; i < totalSlides; i++) {
        await captureSlide(i);
        await new Promise(resolve => setTimeout(resolve, 2000)); // 等待2秒
    }
    
    console.log('🎉 所有页面截图完成！');
    console.log('📁 文件已下载到浏览器默认下载位置');
    console.log('📋 请将截图文件移动到项目的 screenshots/slides/ 文件夹中');
}

// 加载html2canvas库
function loadHtml2Canvas() {
    console.log('📦 正在加载 html2canvas 库...');
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    script.onload = () => {
        console.log('✅ html2canvas 库加载完成！');
        console.log('🚀 现在可以运行 captureAllSlides() 开始截图');
    };
    script.onerror = () => {
        console.error('❌ html2canvas 库加载失败');
    };
    document.head.appendChild(script);
}

// 使用说明
console.log(`
🎯 PPT自动截图工具使用说明：

1️⃣ 首先加载截图库：
   loadHtml2Canvas()

2️⃣ 等待库加载完成后，开始截图：
   captureAllSlides()

3️⃣ 脚本会自动：
   - 切换到每一页PPT
   - 截取1920x1080高质量图片
   - 自动下载为PNG格式
   - 文件命名为 slide-01.png, slide-02.png...

4️⃣ 截图完成后：
   - 将下载的图片移动到 screenshots/slides/ 文件夹
   - 运行 git add . && git commit && git push 提交到仓库

💡 提示：确保PPT在全屏或最大化窗口中运行，以获得最佳截图效果
`);

// 如果用户想要手动截图，提供简化版本
window.captureCurrentSlide = function() {
    if (typeof html2canvas === 'undefined') {
        console.error('❌ 请先运行 loadHtml2Canvas()');
        return;
    }
    
    const currentSlideIndex = window.currentSlide || 0;
    const slide = document.querySelectorAll('.slide')[currentSlideIndex];
    
    html2canvas(slide, {
        backgroundColor: '#0a0a0a',
        width: 1920,
        height: 1080,
        scale: 1,
        useCORS: true
    }).then(canvas => {
        const filename = `slide-${String(currentSlideIndex + 1).padStart(2, '0')}.png`;
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
        console.log(`✅ 已截取当前页面: ${filename}`);
    });
};

// 导出函数到全局作用域
window.loadHtml2Canvas = loadHtml2Canvas;
window.captureAllSlides = captureAllSlides; 