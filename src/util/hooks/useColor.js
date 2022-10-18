export const useColor = (mode) => {
  const changeProperty = (name, value) => {
    document.documentElement.style.setProperty(name, value);
  };

  //todo перевести все в один объект
  if (mode) {
    // dark mode
    changeProperty('--shadow', '');

    changeProperty('--bg1', '#20212C');
    changeProperty('--bg2', '#2B2C37');
    changeProperty('--typography', '#FFF');
    changeProperty('--typography2', '#FFF');
    changeProperty('--line', '#3E3F4E');
    changeProperty('--frame', '#2B2C37');
    changeProperty('--option', '#20212C');
    changeProperty('--btn-bg', '#FFF');
    changeProperty('--btn-bg-hover', '#FFF');
  } else {
    // light mode
    changeProperty('--shadow', '0 10px 20px rgba(54, 78, 126, 0.25)');

    changeProperty('--bg1', '#F4F7FD');
    changeProperty('--bg2', '#828FA3');
    changeProperty('--typography', '#000112');
    changeProperty('--typography2', '#828FA3');
    changeProperty('--line', '#E4EBFA');
    changeProperty('--frame', '#FFF');
    changeProperty('--option', '#FFF');
    changeProperty('--btn-bg', 'rgba(99, 95, 199, 0.1)');
    changeProperty('--btn-bg-hover', 'rgba(99, 95, 199, 0.25)');
  }
};
