import React from 'react';
import './EditMenu.scss';

export const EditMenu = ({options, width = '100%', show}) => {

    const clickOnOption = (option) => {
        console.log(option)
    }

    return (
        <div className="edit-menu">
            <ul className={`edit-menu__frame ${show && 'active'}`} style={{width}}>
                {options.map((option, index) => {
                    const {label, color} = option;

                    return (
                        <li
                            className="edit-menu__frame__option"
                            style={{color}}
                            onClick={(e) => clickOnOption(option)}
                            key={index}
                        >
                            {label}
                        </li>
                    );
        })}
      </ul>
    </div>
  );
};
