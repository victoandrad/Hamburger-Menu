
class NavBar {
    constructor(navBar, mobileMenu, navList, navListLinks) {
        this.navBar = document.querySelector(navBar);
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navListLinks = document.querySelectorAll(navListLinks);
        this.activeClass = "active"
    };

    animationLinks() {
        this.navListLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `animationLinkFade 0.3s ease-in forwards ${index * 0.3}s`
            }
        })
    }

    handleClick() {
        this.mobileMenu.classList.toggle(this.activeClass);
        this.navList.classList.toggle(this.activeClass);
        this.animationLinks();
    };

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => this.handleClick());
    };

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        };
    };
}

const navBar = new NavBar(
    ".navbar",
    ".navbar-mobile-menu",
    ".navbar-list",
    ".navbar-list li"
)

navBar.init()