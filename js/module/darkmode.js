const darkmodeSelect = () => {
    const root = document.querySelector('html');
    const darkSwitch = document.querySelector('[data-js="dark-mode"]');
    const colorMode = localStorage.getItem('darkmode');

    if(colorMode === null) {
        localStorage.setItem('darkmode', '');
    }

    if(colorMode) {
        root.classList.add('dark');
        if(darkSwitch) {
            darkSwitch.setAttribute('checked', 'checked');
        }
    }


    darkSwitch?.addEventListener('change', () => {
        if (darkSwitch.checked) {
            root.classList.add('dark');
            localStorage.setItem('darkmode', '1');
        }  else {
            root.classList.remove('dark');
            localStorage.setItem('darkmode', '');
        }
    });
}

export {darkmodeSelect};