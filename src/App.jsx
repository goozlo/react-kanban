import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import MainPage from './components/MainPage/MainPage';
import './styles/@global.scss';

function App() {
  return (
    <>
      <Modal />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
