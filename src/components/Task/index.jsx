import './task.scss';

const Task = ({ taskContent = 'Build UI for onboarding flow', checklist = '3 of 3 substasks' }) => {
  // const taskContent = 'Build UI for onboarding flow';
  // const checklist = '3 of 3 substasks';

  return (
    <div className={"task"}>
      <p className={"task__title"}>{taskContent}</p>
      <p className={"task__subscribe"}>{checklist}</p>
    </div>
  );
};

export default Task;
