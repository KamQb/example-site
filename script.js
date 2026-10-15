let count = Number(localStorage.getItem("click-count") || 0);

const countEl = document.getElementById("count");
const btn = document.getElementById("btn");

function render() {
  countEl.textContent = count;
}

render();

btn.addEventListener("click", () => {
  count++;
  localStorage.setItem("click-count", String(count));
  render();
});
