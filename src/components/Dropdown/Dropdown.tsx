import React, { FC, useState, ReactElement } from 'react';
import './style.scss';

// TODO: добавить тип для options;
type DropdownProps = {
    options;
    onChange: Function;
};

interface Option {
    selected: boolean;
}

const Dropdown: FC<DropdownProps> = (props: DropdownProps): ReactElement<HTMLDivElement> => {
    const [dropdown, setDropdown] = useState({
        isOpen: false,
        options: props.options || [],
        selected: props.options[0] || {},
    });
    const { isOpen, options, selected } = dropdown;

    const handleOptionClick = (selectedOption) => (): void => {
        if (isOpen) {
            const updatedOptions = options.map((option) => ({
                ...option,
                selected: option.id === selectedOption.id,
            }));

            setDropdown({
                ...dropdown,
                options: updatedOptions,
                selected: selectedOption,
                isOpen: false,
            });
        }
    };

    const handleSelectedClick = (): void => {
        setDropdown({
            ...dropdown,
            isOpen: !isOpen,
        });
    };

    const renderOption = (option: any): ReactElement<HTMLLIElement> => {
        return (
            <li
                key={option.id}
                className={`dropdown__item ${
                    option.id === selected.id ? 'dropdown__item--selected' : ''
                }`}
                onClick={handleOptionClick(option)}
            >
                <span className="dropdown__item-name">{option.name}</span>
            </li>
        );
    };

    return options.length > 0 ? (
        <div className="dropdown">
            <span className="dropdown__selected" onClick={handleSelectedClick}>
                {selected && selected.name}
            </span>
            {isOpen && <ul className="dropdown__list">{options.map(renderOption)}</ul>}
        </div>
    ) : (
        <div />
    );
};

export default Dropdown;
