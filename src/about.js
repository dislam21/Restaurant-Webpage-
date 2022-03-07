const about = (() => {
    const content = document.getElementById('content');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);

    const aboutInfo = document.createElement('div');
    aboutInfo.classList.add('about-info');
    aboutContainer.appendChild(aboutInfo);

    const aboutTitle = document.createElement('h2');
    aboutInfo.appendChild(aboutTitle);
    aboutTitle.textContent = "Learn about Us..."

    const aboutText = document.createElement('p');
    aboutInfo.appendChild(aboutText);
    aboutText.textContent = `Shake \'n Fuel is a family owned and operated small business since 2016. We combine a love for health, fitness, and delicious shakes 
    to help anyone meet their goals. Whether staying lean, building muscle, or just looking for a sweet treat, we've got you covered. The thing that separates us from any other milkshake or sweets business is our dedication to quality. We not only condone living long, healthy lives,
    through food and fitness, but we also love making food that tastes great. We are an active member of the community and hope to continue serving 
    the area. There's no wrong time to prioritize muscle building, personal growth, and mental aptitude with a delicious shake
    to keep you fueled for any challenge you may face. Come in for a free sample today!
    `

    return {
        aboutContainer,
    }
})();

export {about}