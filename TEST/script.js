// 获取所有导航链接和页面元素
const links = document.querySelectorAll('.sidebar ul li a');
const pages = document.querySelectorAll('.page');

// 为每个链接绑定点击事件
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 防止默认跳转行为

        // 获取目标页面的 ID
        const targetPage = link.getAttribute('data-page');

        // 切换页面显示
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });

        // 更新导航栏的选中样式
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
