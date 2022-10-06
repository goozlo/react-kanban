import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import {Modal} from "./components/Modal";
import './styles/@global.scss'
import {Checkbox} from "./components/Checkbox";

const App = () => {


    return (
        <>
            <Checkbox/>
            <Modal/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </>
    )
}

export default App
