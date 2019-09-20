import React, { FC, useState, useEffect, ReactElement } from 'react';
import { Device } from '../../types';

import './style.scss';

type DropdownProps = {
    options;
    onChange: Function;
    selected: any;
    tabIndex?: number;
};

const Dropdown: FC<DropdownProps> = (props: DropdownProps): ReactElement<HTMLDivElement> => {
    let dropdownRef: HTMLUListElement | null = null;
    const defaultOption = {
        id: -1,
        name: 'None',
    };
    const [dropdown, setDropdown] = useState({
        isOpen: false,
        options: [defaultOption, ...props.options],
        selected: props.selected || defaultOption,
    });

    console.warn('dropdown');
    console.warn(props);
    const { isOpen, options, selected } = dropdown;

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick, true);

        if (props.selected !== dropdown.selected) {
            setDropdown({
                ...dropdown,
                selected: props.selected,
            });
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick, true);
        };
    });

    const handleOptionClick = (selectedOption) => (): void => {
        const { onChange } = props;

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

        if (onChange) {
            onChange(selectedOption);
        }
    };

    const handleOutsideClick = (event): void => {
        if (dropdownRef && !dropdownRef.contains(event.target)) {
            setDropdown({
                ...dropdown,
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

    const setRef = (ref: HTMLUListElement) => {
        dropdownRef = ref;
    };

    const renderOption = (option: any): ReactElement<HTMLLIElement> => {
        const { selected } = dropdown;
        const current: Device = selected;
        const className = `dropdown__item ${
            current && option.id === current.id ? 'dropdown__item--selected' : ''
        }`;

        return (
            <li key={option.id} className={className} onClick={handleOptionClick(option)}>
                <span className="dropdown__item-name">{option.name}</span>
            </li>
        );
    };

    return options.length > 0 ? (
        <div className="dropdown" tabIndex={props.tabIndex || -1}>
            <span className="dropdown__selected" onClick={handleSelectedClick}>
                {selected && selected.name}
            </span>

            {isOpen && (
                <ul ref={(ref) => setRef(ref)} className="dropdown__list">
                    {options.map(renderOption)}
                </ul>
            )}
        </div>
    ) : (
        <div />
    );
};

export default Dropdown;
