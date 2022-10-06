import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import {Checkbox} from "./components/Checkbox";
import './styles/@global.scss'


const App = () => (
    <>
        <Checkbox/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </>
)

export default App
