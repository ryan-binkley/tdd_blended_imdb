import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home';

test('renders main app', () => {
  render(<App />);

});

test('renders home component and finds state with movie data', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
