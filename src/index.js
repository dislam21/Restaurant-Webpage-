import { navBar } from "./nav";
import { homePage } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import { footer } from "./footer";



navBar.menuTab.addEventListener('click', () => {
    menu.menuContainer.style.display = 'flex';
    homePage.homeContainer.style.display = "none";
    about.aboutContainer.style.display = "none";
    navBar.menuTab.style.fontSize = '30px';
    navBar.homeTab.style.fontSize = '22px';
    navBar.aboutTab.style.fontSize = '22px';
});

homePage.menuBtn.addEventListener('click', () => {
    homePage.homeContainer.style.display = "none";
    menu.menuContainer.style.display = 'flex';
    navBar.menuTab.style.fontSize = '30px';
    navBar.homeTab.style.fontSize = '22px';
    navBar.aboutTab.style.fontSize = '22px';
});

navBar.homeTab.addEventListener('click', () => {
    homePage.homeContainer.style.display = "block";
    menu.menuContainer.style.display = 'none';
    about.aboutContainer.style.display = "none";
    navBar.menuTab.style.fontSize = '22px';
    navBar.homeTab.style.fontSize = '30px';
    navBar.aboutTab.style.fontSize = '22px';
})

navBar.aboutTab.addEventListener('click', () => {
    about.aboutContainer.style.display = "flex";
    homePage.homeContainer.style.display = "none";
    menu.menuContainer.style.display = 'none';
    navBar.menuTab.style.fontSize = '22px';
    navBar.aboutTab.style.fontSize = '30px';
    navBar.homeTab.style.fontSize = '22px';
})