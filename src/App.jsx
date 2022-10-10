import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import MainPage from './components/MainPage/MainPage';
import TaskColumn from "@components/TaskColumn";
import './styles/@global.scss';

function App() {
  return (
    <>
      <Modal />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <TaskColumn />
    </>
  );
}

export default App;
