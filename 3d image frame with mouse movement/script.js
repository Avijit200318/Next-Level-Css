const box = document.querySelector(".box");
const outerBox = document.querySelector(".outerBox")
outerBox.onmousemove = (e) => {
    let x = e.clientX/6;
    box.style.transform = "perspective(1000px) rotateY("+ x +"deg)";
}