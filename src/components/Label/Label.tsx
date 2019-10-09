import React, { FC, ReactElement } from 'react';
import { concatClassName } from '../../utils/helper';
import './style.scss';

type LabelProps = {
    text: string;
    className?: string;
};

const Label: FC<LabelProps> = (props): ReactElement<HTMLSpanElement> => {
    const { text, className } = props;
    const cn = concatClassName('label', className);

    return <span className={cn}>{text}</span>;
};

export default Label;
