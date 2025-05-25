function plus_one(a) {
    return a + 1;
}
function minus_one(a) {
    return a - 1;
} 
//좋아요
document.querySelector(".like").addEventListener("click", () => {
    const likes = document.querySelector(".mini-likenum");
    let currentLike = parseInt(likes.textContent, 10);
    likes.textContent = plus_one(currentLike);
});
//스크랩
const scrapButton = document.querySelector(".scrap");
const scrapNum = document.querySelector(".mini-scrapnum");
const scrapText = scrapButton.querySelector("div:last-child");
let isScrapped = false;

scrapButton.addEventListener("click", () => {
    let currentScrap = parseInt(scrapNum.textContent, 10);

    if (!isScrapped) {
        scrapNum.textContent = plus_one(currentScrap);
        scrapText.textContent = "스크랩 취소";
        isScrapped = true;
    } else {
        scrapNum.textContent = minus_one(currentScrap);
        scrapText.textContent = "스크랩";
        isScrapped = false;
    }
});

//대댓글
document.querySelector(".answer").addEventListener("click", () => {
    const replySection = document.querySelector(".reply-section");
    const submitBtn = document.querySelector(".submit-reply");

    replySection.style.display = "block";
    submitBtn.style.display = "block";
});

document.querySelector(".submit-reply").addEventListener("click", () => {
    const input = document.querySelector(".reply-input");
    const text = input.value.trim();

    if (text) {
        alert(`작성한 대댓글: ${text}`);
        input.value = ""; 
    } else {
        alert("대댓글을 입력하세요!");
    }
});
