const homePage = (() => {

    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    content.appendChild(homeContainer);

    const title = document.createElement('h1');
    title.textContent = 'Shake \'n Fuel';
    title.classList.add('title');
    homeContainer.appendChild(title);

    const subheading = document.createElement('h2');
    subheading.textContent = 'A Snack, a Meal, Dessert...';
    const punchLine = document.createElement('h2');
    punchLine.classList.add('punch-line');
    punchLine.textContent = 'A Lifestyle';
    subheading.classList.add('subheading');
    homeContainer.appendChild(subheading);
    homeContainer.appendChild(punchLine);

    const homeInfo = document.createElement('div');
    homeInfo.classList.add('home-info');
    homeContainer.appendChild(homeInfo);
    homeInfo.innerHTML = `
    <div id="hours">
        <h3>Hours</h3>
        <p>11 AM - 10 PM Monday to Sunday</p>
    </div>
    <div>
        <h3>Location</h3>
        <p>577 West Birchwood Ave</p>
    </div>
    <div>
        <h3>Contact Us</h3>
        <p>(577) 292-0600</p>
    </div>
    `;

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('menu-button');
    homeInfo.appendChild(menuBtn);

    console.log('homePage Module is working');

    return {
        homeContainer,
        menuBtn
    }

})();

export {homePage}