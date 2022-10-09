import React from 'react';
import {useSelector} from "react-redux";
import {useLocalStorage} from "../../util/hooks/useLocalStorage";
import './Dropdown.scss'

export const Dropdown = ({data}) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const isVisibleModal = useSelector(state => state.modal.isVisible)

    // закрывает дропдаун при закрытии модалки
    React.useEffect(() => {
        setIsVisible(false)
    }, [isVisibleModal])

    const getLabelById = (id) => data.options[id].label

    // получает начальный стейт в зависимости от занчение в локал сторадж
    // если их там нет, то берет за стейт первое занчение данных
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

    // функция изменения выбранной опции
    const pickOption = (id) => {
        setIsVisible(false)

        const key = data.label
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLocalStorage(key, id)
        setSelectedId(id)
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
                <span className='dropdown__fake-select__picker'
                      onClick={() => setIsVisible(prev => !prev)}>{getLabelById(selectedId)}</span>
                <div className={`dropdown__fake-select__options ${isVisible && 'active'}`}>
                    {data.options.map(option =>
                        <span className='dropdown__fake-select__option'
                              onClick={() => pickOption(option.id)}
                              key={option.id}
                        >
                                {option.label}
                            </span>
                    )}
                </div>
            </div>
        </label>
    );
};
