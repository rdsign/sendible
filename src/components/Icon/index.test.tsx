import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Icon } from './index';

describe('Icon', () => {
    const component = <Icon icon="clock" />;

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('should render a svg', () => {
        render(component);

        expect(screen.getByTestId('svg')).toBeInTheDocument();
    });
});
