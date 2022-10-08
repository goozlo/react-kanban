import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {showModal} from "@store/slices/modalSlice";
import {EditTask} from "@modals/EditTask";
import {Remove} from "@modals/Remove";
import './Modal.scss'

export const Modal = () => {
    const dispatch = useDispatch()
    const {isVisible, type} = useSelector(state => state?.modal)

    return (
        <div className={`modal ${isVisible && 'active'}`}
             onClick={() => dispatch(showModal(type))}
        >
            <div
                className={`modal__frame ${isVisible && 'active'}`}
                onClick={e => e.stopPropagation()}
            >
                {type === 'none' && <span>content wasn't provided</span>}
                {type === 'EditTask' && <EditTask/>}
                {type === 'Remove' && <Remove/>}
            </div>
        </div>
    )
}
