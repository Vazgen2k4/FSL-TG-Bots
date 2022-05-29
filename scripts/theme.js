const themeBtn = document.querySelector('.theme__label');

localStorage.lightMode == 'on' ? themeBtn.classList.add('active') : themeBtn.classList.remove('active');
themeSet(themeBtn.classList.contains('active'));

themeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    themeSave();
});

function themeSave() {
    if (themeBtn.classList.contains('active')) {
        themeBtn.classList.remove('active');
        localStorage.lightMode = 'off';
    } else {
        themeBtn.classList.add('active');
        localStorage.lightMode = 'on';
    }
    themeSet(themeBtn.classList.contains('active'));
}

function themeSet(isLight) {
    let body = document.querySelector('body');

    if (isLight) {
        body.classList.add('active');
        document.documentElement.style.setProperty('--primaryColor', '#C676B2');
        document.documentElement.style.setProperty('--secondaryColor', '#1EA8E7 ');
        document.documentElement.style.setProperty('--titleColor', '#081836');
        document.documentElement.style.setProperty('--textColor', '#818998');
        document.documentElement.style.setProperty('--secondaryTextColor', '#DFDFDF');
        document.documentElement.style.setProperty('--elementsColor', '#FFFFFF');
        document.documentElement.style.setProperty('--bgColor', '#F9F9F9');
        // Цвета кнопок
        document.documentElement.style.setProperty('--btnHoverColor', '#E95FC6');
        document.documentElement.style.setProperty('--btnPressColor', '#C02499');
        // Цвет кнопки темы
        document.documentElement.style.setProperty('--themeBtnBorder', '#085CFF');
        document.documentElement.style.setProperty('--blackColor', '#009EFD');
        // Цвета болока For
        document.documentElement.style.setProperty('--forPrimaryColor', '#081836');
        
        
        document.documentElement.style.setProperty('--vectorColor', '#E3EDF2');

    } else {
        body.classList.remove('active');

        document.documentElement.style.setProperty('--primaryColor', '#1EA8E7');
        document.documentElement.style.setProperty('--secondaryColor', '#2AF598 ');
        document.documentElement.style.setProperty('--titleColor', '#fff');
        document.documentElement.style.setProperty('--textColor', '#dfdfdf');
        document.documentElement.style.setProperty('--secondaryTextColor', '#4a586f');
        document.documentElement.style.setProperty('--elementsColor', '#1a2945');
        document.documentElement.style.setProperty('--bgColor', '#081836');
        // Цвета кнопок
        document.documentElement.style.setProperty('--btnHoverColor', '#1472E1');
        document.documentElement.style.setProperty('--btnPressColor', '#0C4E9B');
        // Цвет кнопки темы    
        document.documentElement.style.setProperty('--themeBtnBorder', '#08FFC8');
        document.documentElement.style.setProperty('--blackColor', '#000');
        // Цвета болока For
        document.documentElement.style.setProperty('--forPrimaryColor', '#2AF598');
        
        document.documentElement.style.setProperty('--vectorColor', '#081836');
    }
}