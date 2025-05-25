const check = document.getElementById("que");
const notice = document.getElementById("questionNotice");

que.addEventListener("change", () => {
  if (check.checked) {
    notice.style.display = "block";
  } else {
    notice.style.display = "none";
  }
});
