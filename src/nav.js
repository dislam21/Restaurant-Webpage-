import logo from './img/logo.png';
import socials from './img/socials.png';

const navBar = (() => {

    const content = document.getElementById('content');

    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    content.appendChild(navContainer);

    const myLogo = new Image();
    myLogo.src = logo;
    navContainer.appendChild(myLogo);
    myLogo.classList.add('logo');

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container')
    navContainer.appendChild(tabContainer);

    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const aboutTab = document.createElement('div');

    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    aboutTab.textContent = "About";

    homeTab.classList.add('home-tab')
    menuTab.classList.add('menu-tab')
    aboutTab.classList.add('about-tab')

    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(aboutTab);

    const mySocials = new Image();
    mySocials.src = socials;
    navContainer.appendChild(mySocials);
    mySocials.classList.add('socials-img')

    console.log('navBar module working');

    return {
        homeTab,
        menuTab,
        aboutTab,
    }

})();

export {navBar}