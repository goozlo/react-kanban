import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
import style from './styles/@global.module.scss'

const App = () => (
  <div className={style}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </div>
)

export default App
