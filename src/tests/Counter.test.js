import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => 
{
  render(<Counter />);
});

test('renders counter message', () => 
{
  expect(screen.getByText(/counter/i)).toBeInTheDocument(); 
});

test('should render initial count with value of 0', () => 
{
  expect(screen.getByTestId('count').textContent).toBe('0'); 
});

test('clicking + increments the count', () => 
{
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count').textContent).toBe('1');
});

test('clicking - decrements the count', () => 
{
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count').textContent).toBe('-1');
});
