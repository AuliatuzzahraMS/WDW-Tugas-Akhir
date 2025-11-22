const btn = document.getElementById("menuBtn");
const list = document.getElementById("menuList");

btn.addEventListener("click", () => {
    list.classList.toggle("open");
});

// Tutup menu setelah klik link di mobile
document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', () => {
        list.classList.remove("open");
    });
});

// Smooth scroll
document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const section = document.getElementById(targetId);

        window.scrollTo({
            top: section.offsetTop - 70,
            behavior: "smooth"
        });
    });
});

