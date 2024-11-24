document.addEventListener('DOMContentLoaded', function() {
    // 语言选择功能
    const languageBtn = document.getElementById('languageBtn');
    const languageOptions = document.getElementById('languageOptions');

    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageOptions.style.display = 
            languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        languageOptions.style.display = 'none';
    });

    languageOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // 选择语言
    const languageItems = document.querySelectorAll('.language-option');
    languageItems.forEach(item => {
        item.addEventListener('click', function() {
            // 这里可以添加切换语言的逻辑
            languageOptions.style.display = 'none';
        });
    });

    // 搜索功能
    const searchInput = document.querySelector('.search-container input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // 这里可以添加搜索逻辑
        }
    });

    // 登录注册按钮
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');

    loginBtn.addEventListener('click', function() {
        // 添加登录逻辑
    });

    signupBtn.addEventListener('click', function() {
        // 添加注册逻辑
    });
});
