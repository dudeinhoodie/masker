import React, { FC, useState, useEffect, ReactElement } from 'react';
import { Device } from '../../types';

// Components
import Label from '../Label/Label';

import './style.scss';
import { concatClassName } from '../../utils/helper';

type DropdownProps = {
    options;
    onChange: Function;
    selected: any;
    tabIndex?: number;
    className?: string;
    label?: string;
    disabled?: boolean;
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
        selected: defaultOption,
    });
    const { isOpen, options, selected } = dropdown;
    const cn = concatClassName('dropdown', props.className);
    const cnSelected = concatClassName(
        'dropdown__selected',
        props.disabled && 'dropdown__selected--disabled',
    );
    const cnList = concatClassName(
        'dropdown__list-container',
        props.disabled && 'dropdown__list-container--disabled',
    );

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick, true);

        if (props.selected && props.selected !== dropdown.selected) {
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
        const { disabled } = props;

        if (!disabled) {
            setDropdown({
                ...dropdown,
                isOpen: !isOpen,
            });
        }
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
        <div className={cn} tabIndex={props.tabIndex || -1}>
            {props.label && <Label text={props.label} />}

            <div className={cnList}>
                <div className={cnSelected} onClick={handleSelectedClick}>
                    {selected && selected.name}
                </div>
                {isOpen && (
                    <ul ref={(ref) => setRef(ref)} className="dropdown__list">
                        {options.map(renderOption)}
                    </ul>
                )}
            </div>
        </div>
    ) : (
        <div />
    );
};

export default Dropdown;
