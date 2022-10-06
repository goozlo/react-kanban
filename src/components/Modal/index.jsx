import React from "react";
import './Modal.scss'
import {useSelector, useDispatch} from "react-redux";
import {showModal} from "../../store/slices/modalSlice";

export const Modal = ({children = 'content wasn\'t provided'}) => {
    const dispatch = useDispatch()
    const {isVisible} = useSelector(state => state?.modal)

    return (
        <div className={`modal ${isVisible && 'active'}`}
             onClick={() => dispatch(showModal())}
        >
            <div
                className={`modal__frame ${isVisible && 'active'}`}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
