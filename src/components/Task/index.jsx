import './task.scss';

const Task = ({data}) => {
    // по айди понятно какую таску взяли/тыкнули/переносят и тд
    const {taskContent = 'Build UI for boarding flow', checklist = '3 of 3 subtasks', id} = data

    return (
        <div className={"task"}>
            <p className={"task__title"}>{taskContent}</p>
            <p className={"task__subscribe"}>{checklist}</p>
        </div>
    );
};

export default Task;
