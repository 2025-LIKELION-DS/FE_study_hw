document.getElementById("pimg").addEventListener("click", async () => {
  const response = await fetch("post.html");
  const html = await response.text();
  document.getElementById("postContent").innerHTML = html; //post.html 내용 불러오기
  // 그 안에 작성해야함.

  //가이드 메시지
  document.getElementById("questionCheck").addEventListener("click", () => {
    const postGuide = document.getElementById("postGuide");
    const guideMessage = document.getElementById("guideMessage");

    if (
      postGuide.style.display === "block" &&
      guideMessage.style.display === "block"
    ) {
      postGuide.style.display = "none";
      guideMessage.style.display = "none";
    } else {
      postGuide.style.display = "block";
      guideMessage.style.display = "block";
    }
  });

  /*
  const checkbox = document.getElementById("questionCheck");
  const guide = document.getElementById("guideMessage");

  if (checkbox && guide) {
    checkbox.addEventListener("change", () => {
      guide.style.display = checkbox.checked ? "block" : "none";
    });
  }
    */
});
