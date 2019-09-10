import React, { FC, ReactElement } from 'react';

export type Element = {
    title: string;
    value: string;
};

export interface OptionProps {
    element: Element;
    className?: string;
    onClick: Function;
}

export const Option: FC<OptionProps> = (props): ReactElement<HTMLOptionElement> => {
    const { element, onClick, className } = props;
    const { title, value } = element;

    const handleClick = (event: React.MouseEvent): void => {
        onClick(element);
    };

    return (
        <option value={value} className={className} onClick={handleClick}>
            {title}
        </option>
    );
};
