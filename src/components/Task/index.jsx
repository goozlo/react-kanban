import { useEffect, useState } from 'react';
import './task.scss';

const Task = ({ data }) => {
    // по айди понятно какую таску взяли/тыкнули/переносят и тд
    const {title, description, status, subtasks, checklist = '3 of 3 subtasks', id} = data;
    const [complitedSubtasks, setComplitedSubtasks] = useState(0);
    

    // Считает количество выполненных subtasks
    useEffect(() => {
        let count = 0;
        subtasks.forEach(subtask => subtask.isCompleted === true ? count = count + 1 : '');
        setComplitedSubtasks(count)
    }, [subtasks])

    return (
        <div className={"task"}>
            <p className={"task__title"}>{title}</p>
            <p className={"task__subscribe"}>{`${complitedSubtasks} of ${subtasks.length} subtasks`}</p>
        </div>
    );
};

export default Task;
