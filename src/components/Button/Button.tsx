import React, { FC, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';
import './style.scss';

type ButtonProps = {
    onClick: Function;
    title: string;
    css?: string;
    className?: string;
};

const Button: FC<ButtonProps> = (props): ReactElement<HTMLButtonElement> => {
    const { className, onClick, title, css } = props;
    const cn = concatClassName('button', className);
    const handleClick = (event: React.MouseEvent): void => {
        onClick(event);
    };

    return (
        <button onClick={handleClick} style={css} className={cn}>
            {title}
        </button>
    );
};

export default Button;
