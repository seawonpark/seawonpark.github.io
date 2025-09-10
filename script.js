const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById('helloBtn');
const result = document.getElementById('result');
if (btn && result) {
  btn.addEventListener('click', () => {
    result.textContent = '버튼이 눌렸습니다! 🎉';
  });
}
