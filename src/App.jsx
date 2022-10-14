import { Routes, Route } from 'react-router-dom';
import { Modal } from '@components/Modal';
import { Main } from '@pages/Main/Main';
import './styles/@global.scss';

function App() {
  return (
    <>
      <Modal />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
