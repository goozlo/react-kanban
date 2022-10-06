import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '../../store/slices/modeSlice';
import './Swiper.scss';

export const Swiper = () => {
    const dispatch = useDispatch();
    const {mode} = useSelector(state => state?.mode)

    const handleCheckbox = () => {
        dispatch(changeMode());
    };

    const styleMode = mode ? 'dark-mode' : 'light-mode'

    return (
        <label className={`swiper ${styleMode}`}>
            <input
                className="swiper__input"
                type="checkbox"
                onChange={handleCheckbox}
            />
            <span className="swiper__fake-input" aria-hidden>
                <span
                    className="swiper__toggle "
                    style={mode ? {left: 3} : {left: 'calc(100% - 17px)'}}
                />
            </span>
        </label>
    )
}

