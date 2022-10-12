import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import Button from '@components/Button';
import MainPage from './components/MainPage/MainPage';
// import TaskColumn from '@components/TaskColumn';
import './styles/@global.scss';

function App() {
  return (
    <>
      <Modal />
      <Button />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
