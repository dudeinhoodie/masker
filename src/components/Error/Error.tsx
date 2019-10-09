import React, { FC } from 'react';
import { concatClassName } from '../../utils/helper';
import './styles.scss';

type ErrorProps = {
    id: string | number;
    text: string;
    className?: string;
};

const Error: FC<ErrorProps> = (props) => {
    const { id, text, className } = props;
    const cnError = concatClassName('error', className);

    return (
        <p key={id} className={cnError}>
            {text}
        </p>
    );
};

export default Error;
