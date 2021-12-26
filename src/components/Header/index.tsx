import { FC } from 'react';
import { Logo } from 'components';
import { Container } from './index.styles';

export const Header: FC = () => {
    return (
        <Container className="wrapper">
            <Logo />
        </Container>
    );
};
