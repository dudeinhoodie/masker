import React, { FC, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';
import './style.scss';

type ButtonProps = {
    onClick: Function;
    title: string;
    css?: string;
    className?: string;
    disabled?: boolean;
};

const Button: FC<ButtonProps> = (props): ReactElement<HTMLButtonElement> => {
    const { className, onClick, title, css, disabled } = props;
    const cn = concatClassName('button', className);

    const handleClick = (event: React.MouseEvent): void => {
        if (onClick && !disabled) {
            onClick(event);
        }
    };

    return (
        <button onClick={handleClick} style={css} className={cn} disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;
