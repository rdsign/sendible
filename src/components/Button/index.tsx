import { FC } from 'react';
import { Icon } from 'components';
import { Container } from './index.styles';

export interface ButtonProps {
    backgroundColor?: 'gray800' | 'primary400' | 'white';
    color?: 'gray800' | 'primary400' | 'white';
    customTitle?: string;
    icon: Icons;
    label?: string;
    click: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
    const { click, customTitle, icon, label } = props;

    return (
        <Container {...props} type="button" title={customTitle} onClick={() => click()}>
            {icon && <Icon icon={icon} />}
            {label && label}
        </Container>
    );
};
