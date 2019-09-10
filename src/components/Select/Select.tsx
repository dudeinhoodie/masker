import React, { ChangeEvent, FC, ReactElement } from 'react';
import { Option, Element } from './Option';

type SelectProps = {
    key: string;
    onChange: Function;
    placeholder: string;
    elements: Array<Element>;
};

const Select: FC<SelectProps> = ({
    key,
    onChange,
    placeholder,
    elements,
}): ReactElement<HTMLSelectElement> => {
    const onSelectChange = (element: Element): void => {
        onChange(element);
    };

    const handleChange = (event: any) => {
        console.warn('handleChange');
        console.warn(event);
        console.warn(elements);
    };

    return (
        <div className={'select-box'} key={key}>
            <span className={'select-box__placeholder'}>{placeholder}</span>
            <select className={'select-box__control'} onChange={handleChange}>
                {elements.map((element) => (
                    <Option onClick={onSelectChange} element={element} />
                ))}
            </select>
        </div>
    );
};

export default Select;
