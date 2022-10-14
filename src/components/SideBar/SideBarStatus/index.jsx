import "./sideBarStatus.scss";

import close from '@assets/images/eyeSlash.svg'
import { useDispatch } from 'react-redux';
import { hideSideBar } from '../../../store/slices/sideBarSlice';

const SideBarStatus = () => {

    const dispatch = useDispatch();

    return (
        <button className="sideBarStatus" onClick={() => dispatch(hideSideBar())}>
            <img className="sideBarStatus__img" src={close} alt="hide sidebar" />
            <p className="sideBarStatus__text" >Hide Sidebar</p>
        </button>
    );
};

export default SideBarStatus;
 