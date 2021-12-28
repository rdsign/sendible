import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Button } from './index';
import { Template } from '../../../spec/template';

describe('Button', () => {
    const onClick = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const component = (
        <Template>
            <Button
                icon="clock"
                label="Button"
                click={onClick}
                backgroundColor="primary400"
                color="white"
            />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('should call onClick upon click', () => {
        render(component);
        const button = screen.getByRole('button');

        userEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('if button has a valid icon it should render a svg', () => {
        render(component);

        expect(screen.getByTestId('svg')).toBeInTheDocument();
    });

    test('button text should be "Button"', () => {
        render(component);
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Button');
    });
});
