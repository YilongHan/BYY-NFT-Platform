// 语言选择功能
document.addEventListener('DOMContentLoaded', function() {
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
});
