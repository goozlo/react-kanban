import { Routes, Route } from 'react-router-dom'
import './styles/@global.scss'
import MainPage from './components/MainPage/MainPage';
import {Checkbox} from "./components/Checkbox";

const App = () => (
    <>
        <Checkbox/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </>
)

export default App
