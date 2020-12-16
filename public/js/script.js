function menu_mobile() {
    const list = document.getElementById('header__list');
    const header = document.getElementById('header');
    if (list.style.right == "-25rem") {
        list.style.right = "-1rem";
        list.style.transitionDuration = "0.5s";
        header.style.overflow = "visible";
    } else {
        list.style.right = "-25rem";
        list.style.transitionDuration = "0s";
        header.style.overflow = "hidden";
    }
}