export default function Highlight() {
    let paint = 0;
    const icons = document.querySelectorAll(".iconsNavBar");
    switch (window.location.pathname.toLocaleLowerCase()) {
        case '/home': paint = 0;
            icons[paint].classList.add("active");
            break;
        case '/forum': paint = 1;
            icons[paint].classList.add("active");
            break;
        case '/addplant': paint = 2;
            icons[paint].classList.add("active");
            break;
        case '/myplant': paint = 3;
            icons[paint].classList.add("active");
            break;
        default: icons[paint].classList.add("inactive")
            break;
    }
}