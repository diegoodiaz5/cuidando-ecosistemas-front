export default function Highlight() {
    let paint = 0;
    const icons = document.querySelectorAll(".iconsNavBar");
    if (window.location.pathname.toLocaleLowerCase() === '/forum') {
        paint = 1;
    };
    if (window.location.pathname.toLocaleLowerCase() === '/add') {
        paint = 2;
    };
    if (window.location.pathname.toLocaleLowerCase() === '/plants') {
        paint = 3;
    };
    icons[paint].classList.add("active");
}