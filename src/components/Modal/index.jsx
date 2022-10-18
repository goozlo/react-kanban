import { useSelector, useDispatch } from 'react-redux';
import { EditTask } from '@modals/EditTask';
import { Remove } from '@modals/Remove';
import { showModal } from '@store/slices/modalSlice';
import './Modal.scss';
import CreateTask from '@modals/CreateTask';

export function Modal() {
  const dispatch = useDispatch();
  const { isVisible, type } = useSelector(state => state?.modal);

  return (
    <div className={`modal ${isVisible && 'active'}`} onClick={() => dispatch(showModal(type))}>
      <div className={`modal__frame ${isVisible && 'active'}`} onClick={e => e.stopPropagation()}>
        {type === null && <span>content wasn't provided</span>}
        {type === 'EditTask' && <EditTask />}
        {type === 'Remove' && <Remove />}
        {type === 'CreateTask' && <CreateTask />}
      </div>
    </div>
  );
}
