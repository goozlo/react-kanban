import React from 'react';
import './Accordion.scss';
import {useSelector} from "react-redux";


export const Accordion = ({options, width = '100%', visibility}) => {
    const isVisibleModal = useSelector(state => state.modal.isVisible)
    const {visibleAccordion, setVisibleAccordion} = visibility

    React.useEffect(() => {
        setVisibleAccordion(false)
    }, [isVisibleModal])

    return (
        <div className='accordion'>
            <svg className='accordion__action-menu'
                 onClick={() => setVisibleAccordion(prev => !prev)}
                 width="5" height="20" viewBox="0 0 5 20" fill="none">
                <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
            </svg>
            <ul
                className={`accordion__frame ${visibleAccordion && 'active'}`}
                style={{width}}
            >
                {options.map((option, index) => {
                    const {label, color} = option
                    return <li
                        className='accordion__frame__option'
                        style={{color}}
                        onClick={() => setVisibleAccordion(false)}
                        key={index}
                    >
                        {label}
                    </li>
                })}
            </ul>
        </div>
    )
}

