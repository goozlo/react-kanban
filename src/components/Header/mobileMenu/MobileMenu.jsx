import './mobileMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideSideBar } from '@store/slices/sideBarSlice';

const MobileMenu = () => {
    const dispatch = useDispatch();
    const { isHidden } = useSelector(state => state.sideBar);
    return (
        <button className={`hidden-mobile-sidebar ${isHidden && 'open-mobile-sideBar'}`} onClick={() => dispatch(hideSideBar())}>
            &#10094;</button>
    )
}

export default MobileMenu