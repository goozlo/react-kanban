const COLOR_DATA_BASE = [
  {
    name: 'shadow',
    dark: '',
    light: '0 10px 20px rgba(54, 78, 126, 0.25)'
  },
  {
    name: 'bg1',
    dark: '#20212C',
    light: '#F4F7FD'
  },
  {
    name: 'bg2',
    dark: '#2B2C37',
    light: '#FFF'
  },
  {
    name: 'typography',
    dark: '#FFF',
    light: '#000112'
  },
  {
    name: 'typography2',
    dark: '#FFF',
    light: '#828FA3'
  },
  {
    name: 'line',
    dark: '#3E3F4E',
    light: '#E4EBFA'
  },
  {
    name: 'frame',
    dark: '#2B2C37',
    light: '#FFF'
  },
  {
    name: 'option',
    dark: '#20212C',
    light: '#FFF'
  },
  {
    name: 'btn-bg',
    dark: '#FFF',
    light: 'rgba(99, 95, 199, 0.1)'
  },
  {
    name: 'btn-bg-hover',
    dark: '#FFF',
    light: 'rgba(99, 95, 199, 0.25)'
  },
  {
    name: 'last-column',
    dark: 'linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%)',
    light: 'linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)'
  }
];

const changeProperty = (name, value) => {
  document.documentElement.style.setProperty(name, value);
};

export const useColor = mode => {
  if (mode) {
    // dark mode
    COLOR_DATA_BASE.forEach(i => changeProperty(`--${i.name}`, i.dark));
  } else {
    // light mode
    COLOR_DATA_BASE.forEach(i => changeProperty(`--${i.name}`, i.light));
  }
};
