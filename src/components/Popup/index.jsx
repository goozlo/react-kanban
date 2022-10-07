import React from 'react';
import './Popup.scss';
import {useSelector} from "react-redux";


export const Popup = ({options, width = '100%', visibility}) => {
    const isVisibleModal = useSelector(state => state.modal.isVisible)
    const {visiblePopup, setVisiblePopup} = visibility

    React.useEffect(() => {
        setVisiblePopup(false)
    }, [isVisibleModal])

    return (
        <div className='popup'>
            <svg className='popup__action-menu'
                 onClick={() => setVisiblePopup(prev => !prev)}
                 width="5" height="20" viewBox="0 0 5 20" fill="none">
                <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
            </svg>
            <div

                className={`popup__frame ${visiblePopup && 'active'}`}
                style={{width}}
            >
                {options.map((option, index) => {
                    const {label, color} = option
                    return <span
                        className='popup__frame__option'
                        style={{color}}
                        onClick={() => setVisiblePopup(false)}
                        key={index}
                    >
                    {label}
                </span>
                })}
            </div>
        </div>
    )
}

