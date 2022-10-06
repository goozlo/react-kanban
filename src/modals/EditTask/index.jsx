import React from 'react';
import {AgreementList} from "./AgreementList";
import './EditTask.scss'

const TEMP_DATA = {
    title: 'Research pricing points of various competitors and trial different business',
    body: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    agreements: [
        'Research competitor pricing and business models',
        'Outline a business model that works for our solution',
        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
    ]
}

export const EditTask = () => {
    return (
        <div className='edit-task'>
            <div className='edit-task__wrapper'>
                <h3 className='edit-task__title'>{TEMP_DATA.title}</h3>
                <svg className='edit-task__action-menu' width="5" height="20" viewBox="0 0 5 20" fill="none">
                    <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
                    <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
                    <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
                </svg>
            </div>
            <p className='edit-task__body'>{TEMP_DATA.body}</p>
            <AgreementList agreements={TEMP_DATA.agreements}/>
        </div>
    );
};

