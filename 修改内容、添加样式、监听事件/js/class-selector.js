// 获取 class 为 "myClass" 的所有元素（HTMLCollection）
let elementsByClass = document.getElementsByClassName("myClass");

// 遍历所有 class="myClass" 的元素
for (let i = 0; i < elementsByClass.length; i++) {
    // 修改内容
    elementsByClass[i].textContent = "类选择器修改的内容";

    // 添加样式
    elementsByClass[i].style.backgroundColor = "yellow";

    // 监听事件
    elementsByClass[i].addEventListener("mouseover", function () {
        elementsByClass[i].style.backgroundColor = "lightblue"; // 鼠标悬停变色
    });

    elementsByClass[i].addEventListener("mouseout", function () {
        elementsByClass[i].style.backgroundColor = "yellow"; // 鼠标移开恢复
    });
}

// 使用 querySelectorAll（NodeList），支持 `forEach`
document.querySelectorAll(".myClass").forEach(element => {
    element.style.border = "2px solid blue"; // 添加边框样式
});
