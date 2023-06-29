// 獲取表單元素
const postForm = document.getElementById('postForm');

// 添加表單的提交事件監聽器
postForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止表單的默認提交行為

    // 獲取表單數據
    const formData = new FormData(postForm);

    // 將表單數據轉換為 JSON 格式
    const postData = {};
    for (let [key, value] of formData.entries()) {
        postData[key] = value;
    }

    // 在這裡可以使用 AJAX 或 Fetch API 將數據發送到後端進行處理
    // 例如使用 fetch 函數發送 POST 請求
    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        // 根據後端返回的數據進行相應的處理
        console.log(data);
    })
    .catch(error => {
        console.error('錯誤:', error);
    });
});
