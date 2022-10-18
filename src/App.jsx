import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import CreateTask from '@modals/CreateTask';
import MainPage from './components/MainPage/MainPage';
import './styles/@global.scss';

function App() {
  return (
    <>
      <Modal />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <CreateTask />
    </>
  );
}

export default App;
