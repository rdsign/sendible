import { FC } from 'react';
import { Button } from 'components';
import { Container } from './index.styles';

interface TitleBarProps {
    strongTitle: string;
    italicTitle: string;
}

export const TitleBar: FC<TitleBarProps> = (props) => {
    const { italicTitle, strongTitle } = props;

    return (
        <Container>
            <h1>
                {strongTitle}
                <i> {italicTitle}</i>
            </h1>
            <Button
                backgroundColor="primary400"
                color="white"
                icon="compose"
                label="COMPOSE"
                click={() => console.log('new post')}
            />
        </Container>
    );
};
