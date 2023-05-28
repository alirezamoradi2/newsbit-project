const show_nav = () => {
    let menu = document.getElementById('menu');

    if (menu.className === "menu") {
        menu.className += " show";
    } else if (menu.className === "menu show") {
        menu.className = "menu";
    }
}