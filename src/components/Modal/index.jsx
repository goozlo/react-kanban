import { useSelector, useDispatch } from 'react-redux';
//todo настроить импорты
import { EditTask } from '@modals/EditTask';
import { Remove } from '@modals/Remove';
import { showModal } from '@store/slices/modalSlice';
import './Modal.scss';

export function Modal() {
  const dispatch = useDispatch();
  const { isVisible, type } = useSelector(state => state?.modal);

  //todo перевести все в функцию
  return (
    <div className={`modal ${isVisible && 'active'}`} onClick={() => dispatch(showModal(type))}>
      <div className={`modal__frame ${isVisible && 'active'}`} onClick={e => e.stopPropagation()}>
        {type === 'none' && <span>content wasn't provided</span>}
        {type === 'EditTask' && <EditTask />}
        {type === 'Remove' && <Remove />}
      </div>
    </div>
  );
}
