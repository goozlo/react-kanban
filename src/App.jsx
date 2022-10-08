import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import {Modal} from "./components/Modal";
import './styles/@global.scss'


const App = () => {

    return (
        <>
            <Modal/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </>
    )
}

export default App
