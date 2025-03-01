// 获取 ID 为 "myId" 的元素
let elementById = document.getElementById("myId");

// 修改内容
elementById.textContent = "修改后的文本内容";

// 添加样式
elementById.style.color = "red";
elementById.style.fontSize = "20px";

// 监听事件
elementById.addEventListener("click", function () {
    alert("你点击了 ID 选择的元素！");
});
