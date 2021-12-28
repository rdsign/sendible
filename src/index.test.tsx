import { create } from 'react-test-renderer';
import App from './App';

describe('App', () => {
    const component = <App />;

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });
});
