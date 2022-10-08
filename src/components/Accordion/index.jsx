import React from 'react';
import {useSelector} from "react-redux";
import './Accordion.scss';


export const Accordion = ({options, width = '100%'}) => {
    const [isVisible, setIsVisible] = React.useState(false)

    const isVisibleModal = useSelector(state => state.modal.isVisible)

    React.useEffect(() => {
        setIsVisible(false)
    }, [isVisibleModal])

    return (
        <div className='accordion'>
            <svg className='accordion__action-menu'
                 onClick={() => setIsVisible(prev => !prev)}
                 width="5" height="20" viewBox="0 0 5 20" fill="none">
                <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
            </svg>
            <ul
                className={`accordion__frame ${isVisible && 'active'}`}
                style={{width}}
            >
                {options.map((option, index) => {
                    const {label, color} = option
                    return <li
                        className='accordion__frame__option'
                        style={{color}}
                        onClick={() => setIsVisible(false)}
                        key={index}
                    >
                        {label}
                    </li>
                })}
            </ul>
        </div>
    )
}

