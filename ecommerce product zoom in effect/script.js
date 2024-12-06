const imageZoom = document.querySelectorAll(".imageZoom");

imageZoom.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
        let x = (e.offsetX * 100) / item.offsetWidth;
        let y = (e.offsetY * 100) / item.offsetHeight;
    
        item.style.setProperty('--x', x + '%');
        item.style.setProperty('--y', y + '%');
    })
})