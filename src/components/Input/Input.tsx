import React, { FC, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';
import './styles.scss';

type InputProps = {
    id: string;
    type?: string;
    onChange?: Function;
    value?: string | number;
    className?: string;
};

const Input: FC<InputProps> = (props: InputProps): ReactElement<HTMLInputElement> => {
    const { id, type = 'text', onChange, value, className } = props;
    const cn = concatClassName('input', className);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (onChange) {
            onChange(value);
        }
    };

    return <input id={id} type={type} value={value} onChange={handleChange} className={cn} />;
};

export default Input;
