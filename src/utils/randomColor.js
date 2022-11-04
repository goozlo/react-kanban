const generateRandomColor = () => {
  let color = '';
  // Шаг изменения цвета если цвет совпал с цветами фона
  const random = 5;

  // Генерируем случайный цвет
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
 
  // Проверяем сгенерированный цвет на совпадение с цветами фона
  if (color === 'rgb(244,247,253)' || color === 'rgb(43,44,55)') {
    color = `#${(r + random).toString(16)}${(g + random).toString(16)}${(b + random).toString(16)}`;
  }
  return color;
};

export { generateRandomColor };
