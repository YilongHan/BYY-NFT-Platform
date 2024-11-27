document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.preview-container img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    let currentIndex = 0;

    // 图片数组 - 实际使用时替换为你的图片路径
    const images = [
        'images/hidden-version.png',
        'images/hidden-version2.png',
        'images/hidden-version3.png'
        // ... 添加更多图片
    ];

    // 更新主图片和缩略图状态
    function updateImage(index) {
        // 更新主图片
        mainImage.src = images[index];
        
        // 更新缩略图激活状态
        thumbnails.forEach((thumb, i) => {
            if(i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // 下一张图片
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    }

    // 上一张图片
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    }

    // 为缩略图添加点击事件
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateImage(currentIndex);
        });

        // 设置缩略图的图片源
        const thumbImg = thumbnail.querySelector('img') || document.createElement('img');
        if (!thumbnail.querySelector('img')) {
            thumbnail.appendChild(thumbImg);
        }
        thumbImg.src = images[index];
        thumbImg.alt = `Thumbnail ${index + 1}`;
    });

    // 添加按钮点击事件
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // 添加键盘控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    // 添加轮播图触摸滑动功能
    let touchStartX = 0;
    let touchEndX = 0;

    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    mainImage.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    mainImage.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // 最小滑动距离
            if (difference > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    });

    // 初始化第一张图片
    updateImage(0);

    // 添加价格预测图表
    const ctx = document.getElementById('priceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'NFT Price Trend',
                data: [100, 120, 115, 134, 168, 132],
                borderColor: '#007AFF',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
