import React, { FC, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';

// Components
import Label from '../Label/Label';
import './styles.scss';

type InputProps = {
    id: string;
    type?: string;
    onChange?: Function;
    value?: string | number;
    className?: string;
    label?: string;
    disabled?: boolean;
};

const Input: FC<InputProps> = (props: InputProps): ReactElement<HTMLInputElement> => {
    const { id, type = 'text', onChange, value, className, label, disabled } = props;
    const cnContainer = concatClassName('input-container', className);
    const cnControl = concatClassName(
        'input-container__control',
        disabled && 'input-container__control--disabled',
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={cnContainer}>
            {label && <Label text={label} />}
            <input
                id={id}
                type={type}
                className={cnControl}
                value={value}
                disabled={disabled}
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
