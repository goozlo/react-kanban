import Task from "@components/Task";

let tasksArray = [
  {
    id: 0,
    title: 'Build UI for boarding flow',
    subtasks: '0 of 3 subtasks'
  },
  {
    id: 1,
    title: 'Build UI for search',
    subtasks: '0 of 1 subtasks'
  },
  {
    id: 2,
    title: 'Create template structures',
    subtasks: '0 of 2 subtasks'
  },
  {
    id: 3,
    title: 'QA and test all major user journeys',
    subtasks: '0 of 2 subtasks'
  }
]

const TaskColumn = () => {
  return (
      <div>
        <h3>doing (2/3)</h3>
        {tasksArray.map(task => <Task key={task.id} data={task}/>)}
      </div>
  )
}


export default TaskColumn;
