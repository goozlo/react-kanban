import './SmallMenu.scss';

export const SmallMenu = ({ isSmallMenuOpened }) => {
  return (
    <div className={`small-menu ${isSmallMenuOpened && "small-menu_status_active"}`}>
      <ul className="small-menu__list">
        <li className="small-menu__edit">Edit Task</li>
        <li className="small-menu__delete">Delete Task</li>
      </ul>
    </div>
  );
};
