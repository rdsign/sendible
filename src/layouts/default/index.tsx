import { FC, ReactNode } from 'react';
import { Header } from 'components';

interface DefaultProps {
    children: ReactNode;
}

export const Default: FC<DefaultProps> = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
    </>
);
