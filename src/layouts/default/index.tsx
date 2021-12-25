import { FC, ReactNode } from 'react';
import { Container } from './index.styles';

interface DefaultProps {
    children: ReactNode;
}

export const Default: FC<DefaultProps> = ({ children }) => <Container>{children}</Container>;
