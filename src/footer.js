const footer = (() => {

    const content = document.getElementById('content');

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    content.appendChild(footerContainer);

    const developerTag = document.createElement('h3');
    developerTag.textContent = 'Developed by Daniel Islam';
    developerTag.classList.add('developer-tag');
    footerContainer.appendChild(developerTag);

    console.log('footer module working');

})();

export {footer}