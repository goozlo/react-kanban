import Task from "../Task/index.jsx";

let tasksArray = [
  {
    title: 'Build UI for onboarding flow',
    subtasks: '0 of 3 substasks'
  },
  {
    title: 'Build UI for search' ,
    subtasks: '0 of 1 substasks'
  },
  {
    title: 'Create template structures' ,
    subtasks: '0 of 2 substasks'
  },
  {
    title: 'QA and test all major user journeys' ,
    subtasks: '0 of 2 substasks'
  }
]

const TaskColumn = () => {
  return (<> {tasksArray.map((task) => {
    <Task taskContent={task.title} checklist={task.subtasks} />
  })} </>)
}


export default TaskColumn;
