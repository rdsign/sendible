import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { PostCardModal } from './index';
import { Template } from '../../../spec/template';

describe('PostCardModal', () => {
    const onClose = jest.fn();
    const onError = jest.fn();
    const onSave = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const component = (
        <Template>
            <PostCardModal
                date="01/02/202"
                id="c020fcff-11e3-480d-9a6d-6ebb5772dd0d"
                imageUrl="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1845&q=80"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                time="16:3"
                isVisible
                close={onClose}
                error={onError}
                save={onSave}
            />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('message input field should match the passed prop and changes', () => {
        render(component);
        const [textarea] = screen.getAllByRole('textbox');

        userEvent.type(textarea, ' Nice!');

        expect(textarea).toHaveValue(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nice!',
        );
    });

    test('should call onError upon click on save button, because date and time are incorrect', () => {
        render(component);
        const [button] = screen.getAllByRole('button');

        userEvent.click(button);

        expect(onError).toHaveBeenCalledTimes(1);
    });

    test('should call onClose upon click on close button', () => {
        render(component);
        const [, button] = screen.getAllByRole('button');

        userEvent.click(button);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('should call onClose upon click on overlay', () => {
        render(component);
        const overlay = screen.getByTestId('overlay');

        userEvent.click(overlay);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('date and time inputs should format the value based on date/time masks', () => {
        render(component);
        const [, date, time] = screen.getAllByRole('textbox');

        userEvent.type(date, '9000');
        userEvent.type(time, '0000');
        expect(date).toHaveValue('01/02/2029');
        expect(time).toHaveValue('16:30');
    });
});
