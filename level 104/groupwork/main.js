// Smooth Scroll + Nav Highlight
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
        if (navLink) {
            if(scrollPos >= section.offsetTop && scrollPos <= section.offsetTop + section.offsetHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// Hero Parallax
const hero = document.querySelector('.hero');
if(hero){
    window.addEventListener('scroll', () => {
        let offset = window.scrollY;
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    });
}

// Interactive Hover for Content Lists
document.querySelectorAll('.content ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.color = '#FFD700'; // golden highlight
        item.style.transition = 'all 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.color = '#f4f4f4';
    });
});

// Dynamic Gradient Background
let hue = 0;
setInterval(() => {
    document.body.style.background = `linear-gradient(135deg, hsl(${hue},70%,30%), hsl(${(hue+60)%360},70%,40%), hsl(${(hue+120)%360},70%,50%))`;
    hue = (hue + 1) % 360;
}, 50);

// Contact Form Validation + Visual Feedback
const forms = document.querySelectorAll('.contact-form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        let valid = true;
        form.querySelectorAll('input, textarea').forEach(field => {
            if(!field.value){
                field.style.border = '2px solid red';
                valid = false;
            } else {
                field.style.border = '2px solid #00f5ff';
            }
        });
        if(!valid) e.preventDefault();
    });
});
