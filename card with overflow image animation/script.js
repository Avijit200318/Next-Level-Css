document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener('mousemove', (e) => {
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        document.querySelectorAll(".clipBox").forEach((span) => {
            span.style.left = x + 'px';
            span.style.top = y + 'px';
        })
    })
})