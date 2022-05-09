import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Test', () => {
	beforeEach(() => {
		render(<App />);
	});

	it('Show App', () => {
		expect(screen.getByText('App'));
	});
});
