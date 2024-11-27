document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;

    // 设置滑块的初始位置
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 更新缩略图激活状态
    function updateThumbnails() {
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentIndex);
        });
    }

    // 下一张图片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateSliderPosition();
        updateThumbnails();
    }

    // 上一张图片
    function prevSlide() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateSliderPosition();
        updateThumbnails();
    }

    // 点击缩略图切换到对应图片
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateSliderPosition();
            updateThumbnails();
        });
    });

    // 添加按钮点击事件
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 添加触摸滑动功能
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // 最小滑动距离
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });

    // 自动播放
    let autoplayInterval = setInterval(nextSlide, 5000);

    // 鼠标悬停时暂停自动播放
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
});
