import { FC } from 'react';
import { generateId } from 'utils';
import { Container } from './index.styles';

interface FeedbackProps {
    messages: string[];
}

export const Feedback: FC<FeedbackProps> = (props) => {
    const { messages } = props;

    const feedbackList = messages.map((m: string) => <p key={generateId()}>• {m}</p>);

    return (
        <Container isVisible={messages.length > 0} data-testid="feedback">
            {feedbackList}
        </Container>
    );
};
