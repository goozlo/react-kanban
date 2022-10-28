import { useSelector, useDispatch } from 'react-redux';
//todo настроить импорты
import { EditTask } from '@modals/EditTask';
import { Remove } from '@modals/Remove';
import { showModal } from '@store/slices/modalSlice';
import './Modal.scss';
import CreateTask from '@modals/CreateTask';
import { AddBoard } from '@modals/AddBoard';
import AddColumn from '@modals/AddColumn';


export function Modal() {
  const dispatch = useDispatch();
  const { isVisible, type } = useSelector(state => state?.modal);

  //todo перевести все в функцию
  return (
    <div className={`modal ${isVisible && 'active'}`} onMouseDown={() => dispatch(showModal(type))}>
      <div className={`modal__frame ${isVisible && 'active'}`} onMouseDown={e => e.stopPropagation()}>
        {type === 'none' && <span>content wasn't provided</span>}
        {type === 'EditTask' && <EditTask />}
        {type === 'Remove' && <Remove />}
        {type === 'CreateTask' && <CreateTask />}
        {type === 'AddBoard' && <AddBoard />}
        {type === 'AddColumn' && <AddColumn />}
      </div>
    </div>
  );
}
