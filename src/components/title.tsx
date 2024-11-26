import { FC } from 'react';
import { TitleProps } from '../../types/titleProps';

const Title: FC<TitleProps> = ({ children, className }) => {
    return (
        <p className={`text-base font-medium mb-2 text-black/50 ${className || ''}`}>
            {children}
        </p>
    );
};

export default Title;
