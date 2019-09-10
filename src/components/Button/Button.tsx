import React, { FC, ReactElement } from 'react';

type ButtonProps = {
    onClick: Function;
    title: string;
    css?: string;
};

const Button: FC<ButtonProps> = ({ onClick, title, css }): ReactElement<HTMLButtonElement> => {
    const handleClick = (event: React.MouseEvent): void => {
        onClick(event);
    };

    return (
        <button onClick={handleClick} style={css} className={'button'}>
            {title}
        </button>
    );
};

export default Button;
