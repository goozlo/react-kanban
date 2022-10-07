export const useColor = (mode) => {
    const changeProperty = (name, value) => {
        document.documentElement.style.setProperty(name, value);
    }


    if (mode) {
        changeProperty('--bg1', '#20212C');
        changeProperty('--bg2', '#2B2C37');
        changeProperty('--typography', '#FFF');
        changeProperty('--line', '#E4EBFA');
        changeProperty('--check', '#2B2C37');
    } else {
        changeProperty('--bg1', '#F4F7FD');
        changeProperty('--bg2', '#828FA3');
        changeProperty('--typography', '#000112');
        changeProperty('--line', '#3E3F4E');
        changeProperty('--check', '#FFF');
    }
}
