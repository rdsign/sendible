import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { TitleBar } from './index';
import { Template } from '../../../spec/template';

describe('TitleBar', () => {
    const onCompose = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const component = (
        <Template>
            <TitleBar compose={onCompose} italicTitle="posts" strongTitle="Scheduled" />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('should call onCompose upon click on compose button', () => {
        render(component);
        const button = screen.getByRole('button');

        userEvent.click(button);

        expect(onCompose).toHaveBeenCalledTimes(1);
    });
});
