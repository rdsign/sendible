import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Input } from './index';
import { Template } from '../../../spec/template';

describe('Input', () => {
    const onChange = jest.fn();

    const component = (
        <Template>
            <Input id="date" change={onChange} mask="date" maxLength={10} />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('input should respect maxLenght', () => {
        render(component);
        const input = screen.getByRole('textbox');

        userEvent.type(input, '01/01/202222');
        expect(input).toHaveValue('01/01/2022');
    });

    test('input should respect date mask', () => {
        render(component);
        const input = screen.getByRole('textbox');

        userEvent.type(input, 'abc12345678900');
        expect(input).toHaveValue('12/34/5678');
    });

    test('input should change its value on change', () => {
        render(
            <Template>
                <Input id="date" change={onChange} />
            </Template>,
        );
        const input = screen.getByRole('textbox');

        userEvent.type(input, 'My new value');
        expect(input).toHaveValue('My new value');
    });

    test('input should have initial value', () => {
        render(
            <Template>
                <Input id="date" change={onChange} initialValue="Hello World" />
            </Template>,
        );
        const input = screen.getByRole('textbox');

        expect(input).toHaveValue('Hello World');
    });
});
