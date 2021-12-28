import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Feedback } from './index';
import { Template } from '../../../spec/template';

describe('Feedback', () => {
    const component = (
        <Template>
            <Feedback messages={['message one', 'message two']} />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('feedback should cointain "• message one" and "• message two" inner text', () => {
        render(component);

        expect(screen.getByText('• message one')).toBeInTheDocument();
        expect(screen.getByText('• message two')).toBeInTheDocument();
    });
});
