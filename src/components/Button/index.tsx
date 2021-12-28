import { FC } from 'react';
import { Icon } from 'components';
import { Container } from './index.styles';

export interface ButtonProps {
    backgroundColor?: 'gray800' | 'primary400' | 'white';
    className?: string;
    color?: 'gray800' | 'primary400' | 'white';
    customTitle?: string;
    icon: Icons;
    label?: string;
    click: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
    const { click, className, customTitle, icon, label } = props;

    return (
        <Container
            {...props}
            className={className}
            type="button"
            title={customTitle}
            onClick={() => click()}
        >
            {icon && <Icon icon={icon} />}
            {label && label}
        </Container>
    );
};
