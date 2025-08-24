// Counter Animation
function animateCounter(id, target, speed = 50) {
    const el = document.getElementById(id);
    let count = 0;
    const update = () => {
    count += Math.ceil(target / 100);
        if (count > target) count = target;
        el.textContent = count.toLocaleString();
        if (count < target) setTimeout(update, speed);
        };
    update();
}

// Init counters
window.addEventListener("load", () => {
    animateCounter("visitors", Math.floor(Math.random() * 100000), 20);
    animateCounter("carsSold", Math.floor(Math.random() * 5000), 40);
    animateCounter("rating", 5, 200);
});

// Photo drag horizontal
document.querySelectorAll(".car-card img").forEach(img => {
    let isDown = false, startX, scrollLeft;

    img.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - img.offsetLeft;
        img.style.cursor = 'grabbing';
    });
    img.addEventListener('mouseup', () => { isDown = false; img.style.cursor='grab'; });
    img.addEventListener('mouseleave', () => { isDown = false; img.style.cursor='grab'; });
    img.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        const x = e.pageX - img.offsetLeft;
        const walk = (x - startX) * 1; // scroll-fast
        img.scrollLeft = walk;
    });
});
