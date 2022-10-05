import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Authorization from './pages/ Authorization';
import './styles/@global.scss'
import MainPage from './components/MainPage/MainPage';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Authorization />} />
    </Routes>
  </Layout>

)

export default App
