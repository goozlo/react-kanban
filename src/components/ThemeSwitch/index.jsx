import { useState } from 'react';
import './themeSwitch.scss'
import darkThemeIcon from "../../images/darkThemeIcon"
import lightThemeIcon from "../../images/lightThemeIcon"

const ThemeSwitch = () => {
    const [checkBoxActive, setCheckboxActive] = useState(false);

    // const handleCheckbox = () => {
    //     console.log('clicked')
    //     if (checkBoxActive) {
    //         console.log('test')
    //         setCheckboxActive(false)
    //     } else if (!checkBoxActive) {
    //         setCheckboxActive(true)
    //         console.log('test2')
    //     }
    // }
    return (
        <div className='themeSwiper'>
            <img src={lightThemeIcon} />
            <input type="checkbox" className="swiper" aria-label="Toggle something"
            // onChange={handleCheckbox}
            // checked={checkBoxActive ? true : false}
            />
            <img src={darkThemeIcon} />
        </div>

    )
};

export default ThemeSwitch;

