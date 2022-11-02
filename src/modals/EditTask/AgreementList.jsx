import React from 'react';
import { Checkbox } from '../../components/Checkbox';
import { countReducer } from '../../utils/reducers/countReducer';
import './AgreementList.scss';

export const AgreementList = ({ agreements }) => {
  const initialState = { count: agreements.filter(item => item.done === true).length };

  const [state, dispatch] = React.useReducer(countReducer, initialState);

  return (
    <>
      <span className='agreement-list'>
        Subtasks ({state.count} of {agreements.length})
      </span>
      {agreements.map((agreement, index) => (
        <Checkbox key={index} toggle={dispatch} label={agreement.name} isDone={agreement.done} />
      ))}
    </>
  );
};
