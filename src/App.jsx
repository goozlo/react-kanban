import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout';
import Authorization from './pages/ Authorization';
import ThemeSwiper from './components/ThemeSwiper';
import SideBar from './components/SideBar/index';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<SideBar />} />
      <Route path="/auth" element={<Authorization />} />
    </Routes>
  </Layout>
)

export default App
