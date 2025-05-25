//좋아요
let count = 12;

const likeBt = document.getElementById("likeBt");
const display = document.getElementById("likeCount");

likeBt.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

//스크랩
let sCount = 20;

const scBt = document.getElementById("scBt");
const sdisplay = document.getElementById("starCount");

scBt.addEventListener("click", () => {
  sCount++;
  sdisplay.textContent = sCount;

  scBt.innerText = "스크랩 취소";
});

//대댓글
document.getElementById("reCo").addEventListener("click", () => {
  const reline = document.getElementById("reline");

  if (reline.style.display === "block") {
    reline.style.display = "none";
  } else {
    reline.style.display = "block";
  }
});

//대댓글 추가
document.getElementById("repen").addEventListener("click", () => {
  const reMsg = document.getElementById("reinputText");
  alert(reMsg.value);
});
