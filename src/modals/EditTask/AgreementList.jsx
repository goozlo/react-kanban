import React from 'react';
import {Checkbox} from "../../components/Checkbox";
import {countReducer} from '../../util/reducers/countReducer'
import './AgreementList.scss'

const initialState = {count: 0};


export const AgreementList = ({agreements}) => {
    const [state, dispatch] = React.useReducer(countReducer, initialState);

    return (
        <>
            <span className='agreement-list'>Subtasks ({state.count} of {agreements.length})</span>
            {agreements.map((agreement, index) =>
                <Checkbox
                    key={index}
                    toggle={dispatch}
                    label={agreement}
                />
            )}
        </>
    )
}


