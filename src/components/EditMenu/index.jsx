import React from 'react';
import {useSelector} from 'react-redux';
import './EditMenu.scss';

export const EditMenu = ({options, width = '100%'}) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const isVisibleModal = useSelector((state) => state.modal.isVisible);

    React.useEffect(() => {
        setIsVisible(false);
    }, [isVisibleModal]);

    const clickOnOption = (option) => {
        console.log(option);
        setIsVisible(false);
    };

    return (
        <div className="edit-menu">
            <svg
                className="edit-menu__action-menu"
                onClick={() => setIsVisible((prev) => !prev)}
                width="5"
                height="20"
                viewBox="0 0 5 20"
                fill="none"
            >
                <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3"/>
                <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3"/>
            </svg>
            <ul className={`edit-menu__frame ${isVisible && 'active'}`} style={{width}}>
                {options.map((option, index) => {
                    const {label, color} = option;
                    return (
                        <li
                            className="edit-menu__frame__option"
                            style={{color}}
                            onClick={() => clickOnOption(option)}
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
