import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '@store/slices/modeSlice';
import {useColor} from "@util/hooks/useColor";
import './Toggle.scss';

export const Toggle = () => {
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
        <label className='toggle'>
            <input
                className="toggle__input hidden"
                type="checkbox"
                onChange={handleCheckbox}
            />
            <span className="toggle__fake-input" aria-hidden>
                <span
                    className="toggle__circle"
                    style={mode ? {left: 3} : {left: 'calc(100% - 17px)'}}
                />
            </span>
        </label>
    )
}

