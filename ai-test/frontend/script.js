document.getElementById('loveForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
  
    const response = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    const output = document.getElementById('output');
    output.innerHTML = '';
  
    // 打字机效果
    let index = 0;
    const text = result.letter;
    const speed = 40;
    function typeWriter() {
      if (index < text.length) {
        output.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = "zh-CN";
        msg.rate = 0.95;
        speechSynthesis.speak(msg);
      }
    }
    typeWriter();
  });