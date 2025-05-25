//연필 클릭했을때
document.getElementById("writeIcon").addEventListener("click",() => {
    
    const form = document.getElementById("writeForm");
    const input = document.getElementById("text-input");
    const icon = document.getElementById("writeIcon"); 
    const writebox = document.getElementById("write"); 
    const frame = document.getElementById("postFrame");

    form.style.visibility = "hidden";
    form.style.display = "none";
    writebox.style.background="#FFFFFF";
    writebox.style.height="auto";
    writebox.style.overflow="auto";
    writebox.style.scrollbar= "none";
    writebox.style.padding= "0";
    writebox.style.border = "none";
    // input.style.display = "none";
    // icon.style.display = "none";
    frame.style.display = "block";
    frame.style.visibility = "visible";
    frame.style.scrollbar = "none"
    frame.overflow.visibility = "visible"
    
});

document.body.style.overflow = "visible";

document.getElementsById("write")[i].style.overflow = "hidden";
document.getElementsById("write").style.scrollbar = "hidden";

document.getElementById("postframe").style.overflow = "visible"