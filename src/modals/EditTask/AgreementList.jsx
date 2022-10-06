import React from 'react';
import {Checkbox} from "../../components/Checkbox";
import './AgreementList.scss'

export const AgreementList = ({agreements}) => {


    return (
        <>
            <span className='agreement-list'>Subtasks (2 of {agreements.length})</span>
            {agreements.map((agreement, index) => <Checkbox key={index} label={agreement}/>)}
        </>
    )
}


