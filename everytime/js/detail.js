//좋아요, 스크랩 숫자
// 스크랩 글자 변경
//댓글 만들기 => html,css
// 대댓글 js alert

const goodbth = document.getElementById("button_detail1");
const starbtn = document.getElementById("button_detail2");
const goodNum = document.querySelector(".textcolor_red");
const starNum = document.querySelector(".textcolor_yellow");
const scrap = document.getElementById("scrap_text");
const starimg = document.getElementById("starimg");

goodbth.addEventListener("click", function () {
  let currentNum = Number(goodNum.textContent);
  goodNum.textContent = currentNum + 1;
});

starbtn.addEventListener("click", function () {
  let star_currentnum = Number(starNum.textContent);
  starNum.textContent = star_currentnum + 1;
  scrap.textContent = "스크랩 취소";
  starimg.style.display = "none";
});

const write = document.getElementById("double_text");
const double_text = document.querySelector(".double_plus_text");

double_text.addEventListener("click", function () {
  write.style.display = "block";
});

const input_context = document.querySelector(".d");
const writebtn = document.querySelector(".plus_submit_button");

writebtn.addEventListener("click", function () {
  let input_text = input_context.value;
  alert(input_text);
});
