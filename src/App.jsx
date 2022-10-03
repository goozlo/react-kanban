import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout';
import Authorization from './pages/ Authorization';
// import style from './styles/@global.module.scss'

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authorization />} />
    </Routes>
  </Layout>
)

export default App
