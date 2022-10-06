import React from 'react';
import { Link } from "react-router-dom";
import './bordsList.scss'

const BordsList = () => {

    return (

        <div className='bordsList'>
            <h2 className=''>ALL BOARDS (3)</h2>
            <div className='bordsList__links'>
                <Link className='bordsList__link'> Доска 1</Link>
                <Link className='bordsList__link'> Доска 2</Link>
            </div>
        </div>

    )

};

export default BordsList;