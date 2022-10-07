import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '../../store/slices/modeSlice';
import {useColor} from "../../util/hooks/useColor";
import './Swiper.scss';

export const Swiper = () => {
    const dispatch = useDispatch();
    const {mode} = useSelector(state => state?.mode)

    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useColor(mode)
    }, [mode])

    const handleCheckbox = () => {
        dispatch(changeMode());
    };

    return (
        <label className='swiper'>
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

