import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { PostCard } from './index';
import { Template } from '../../../spec/template';

describe('PostCard', () => {
    const onDelete = jest.fn();
    const onEdit = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const component = (
        <Template>
            <PostCard
                date="25/12/2021"
                key="c020fcff-11e3-480d-9a6d-6ebb5772dd0d"
                id="c020fcff-11e3-480d-9a6d-6ebb5772dd0d"
                imageUrl="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1845&q=80"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit lacus neque, id commodo erat porta id. Praesent vitae dolor metus. Phasellus sed dolor et purus dapibus pulvinar vel ac mauris. Sed at euismod massa, sit amet ultrices lorem. Nulla commodo a massa et luctus."
                time="16:30"
                del={onDelete}
                edit={onEdit}
            />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('should call onEdit upon click edit button and onDelete upon click delete button', () => {
        render(component);
        const button = screen.getAllByRole('button');

        userEvent.click(button[0]);

        expect(onEdit).toHaveBeenCalledTimes(1);

        userEvent.click(button[1]);

        expect(onDelete).toHaveBeenCalledTimes(1);
    });
});
