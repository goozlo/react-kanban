import style from './task.scss';

const Task = () => {
  const taskContent = 'Build UI for onboarding flow';
  const checklist = '3 of 3 substasks';

  return (
    <div className={style.task}>
      <p className={style.task__title}>{taskContent}</p>
      <p className={style.task__subscribe}>{checklist}</p>
    </div>
  );
};

export default Task;
