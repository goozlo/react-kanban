import React from 'react';
import './sideBarButton.scss';

import open from '@assets/images/eye.svg'
import { useDispatch, useSelector } from 'react-redux';
import { hideSideBar } from '@store/slices/sideBarSlice';
const SideBarButton = () => {

    const dispatch = useDispatch();
    const { isHidden } = useSelector(state => state.sideBar);
    return (

                <button className={`hidden-sidebar ${isHidden && 'open-sideBar'}`} onClick={() => dispatch(hideSideBar())}>
                    <img className='open-sideBar-img' src={open} />
                </button>
    )
}


export default SideBarButton;