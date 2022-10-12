import React from "react";
import {Routes, Route} from 'react-router-dom';
import {Modal} from '@components/Modal';
import MainPage from './components/MainPage/MainPage';
import './styles/@global.scss';
import './App.scss'

function App() {
    const [width, setWidth] = React.useState(140)
    const [height, setHeight] = React.useState(80)

    React.useEffect(() => {
        document.documentElement.style.setProperty('--sidebar-width', `${width}px`);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
    }, [width, height])


    return (
        <>
            <div className='_header'>header</div>
            <div className='_sidebar'>sidebar</div>
            <div className='_main'>main</div>
            <div style={{position: 'absolute', bottom: '100px', right: '100px'}}>
                width
                <input
                    onChange={(e) => setWidth(Number(e.target.value))}
                    value={width}
                    type="range"
                    min={0}
                    max={140}
                    step={1}/>
                height
                <input
                    onChange={(e) => setHeight(Number(e.target.value))}
                    value={height}
                    type="range"
                    min={0}
                    max={140}
                    step={1}/>
            </div>
        </>
    );
}

export default App;
