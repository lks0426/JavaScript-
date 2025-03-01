// 获取所有 <p> 元素
let elementsByTag = document.getElementsByTagName("p");

// 遍历所有 <p> 标签
for (let i = 0; i < elementsByTag.length; i++) {
    // 修改内容
    elementsByTag[i].innerHTML = "元素选择器修改的内容";

    // 添加样式
    elementsByTag[i].style.fontWeight = "bold";

    // 监听事件（双击变色）
    elementsByTag[i].addEventListener("dblclick", function () {
        elementsByTag[i].style.color = "green";
    });
}

// 使用 querySelectorAll（NodeList），支持 `forEach`
document.querySelectorAll("p").forEach(element => {
    element.style.padding = "10px"; // 添加内边距
});
