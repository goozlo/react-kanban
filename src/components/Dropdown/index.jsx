import React, {useEffect} from 'react';
import {useLocalStorage} from "@util/hooks/useLocalStorage";
import './Dropdown.scss'

export const Dropdown = ({data, clickToShow, show}) => {

    const getLabelById = (id) => data.options[id].label

    const getOptionId = () => {
        const key = data.label
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const valueInStorage = useLocalStorage(key)

        if (valueInStorage) {
            return valueInStorage
        }

        return data.options[0].id
    }

    const [selectedId, setSelectedId] = React.useState(getOptionId())

    const pickOption = (id) => {
        const key = data.label
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLocalStorage(key, id)
        setSelectedId(id)

        console.log(id)
    }

    const getTransition = (i) => {
        if (show) {
            return {transition: `all .4s ${i * 240}ms linear`}
        }

        return {transition: `all .4s ${(data.options.length - i) * 240}ms linear`}
    }

    return (
        <label className='dropdown'>
            <select className='dropdown__select' defaultValue={data.options[selectedId].value}>
                {data.options.map(option =>
                    <option key={option.id}
                            value={option.value}
                    >
                        {option.label}
                    </option>
                )}
            </select>
            <span className='dropdown__label'>{data.label}</span>

            <div className='dropdown__fake-select' aria-hidden>
                <span
                    className='dropdown__fake-select__picker'
                    onClick={clickToShow}
                >
                    {getLabelById(selectedId)}
                </span>


                <ul className='dropdown__fake-select__options'>
                    {data.options.map((option, index) =>
                        <li className={`dropdown__fake-select__option option-${index} ${show && 'open'}`}
                            style={getTransition(index)}
                            onClick={() => pickOption(option.id)}
                            key={option.id}
                        >
                            {option.label}
                        </li>
                    )}
                </ul>

            </div>
        </label>
    );
};
