import Dropdown from 'react-dropdown';
import './DropDown.scss';

// Компонент в качестве пропса принимает массив с данными для выпадающего списка
const DropDown = (props) => {
  
  // Переменная создана в качестве заглушки. Удалить в будущем. 
  const options = ['Todo', 'Doing', 'Done'];

  return (
    <Dropdown
      options={options}
      className="dropdown"
      controlClassName="dropdown__control"
      menuClassName="dropdown__menu"
      arrowClassName='dropdown__arrow'
      placeholder="Select..."
    />
  );
};

export default DropDown;
