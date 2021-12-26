import { FC } from 'react';
import { Button } from 'components';
import { Container } from './index.styles';

interface TitleBarProps {
    italicTitle: string;
    strongTitle: string;
    compose: () => void;
}

export const TitleBar: FC<TitleBarProps> = (props) => {
    const { compose, italicTitle, strongTitle } = props;

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
                click={() => compose()}
            />
        </Container>
    );
};
