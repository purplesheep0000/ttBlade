document.addEventListener('DOMContentLoaded', () => {
    // 獲取表單元素
    const registerForm = document.querySelector('.register-form');
    const usernameInput = document.querySelector('input[name="username"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');

    // 添加表單的提交事件監聽器
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 阻止表單的默認提交行為

        // 獲取表單數據
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // console.log(username);

        // 在這裡可以進行表單驗證，例如檢查密碼是否匹配等
        if (password !== confirmPassword) {
            alert('密碼不一致');
            return;
        }

        // 在這裡可以使用 AJAX 或 Fetch API 將數據發送到後端進行註冊
        // 例如使用 fetch 函數發送 POST 請求
        fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('请求失败');
            }
        })
        .then(data => {
            // 根據後端返回的數據進行相應的處理
            console.log(data);
        })
        .catch(error => {
            console.error('錯誤:', error);
        });
    });
});
