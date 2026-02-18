import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Create a post" onClick={() => {}} />);
    const buttonElement = screen.getByText('Create a post');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    // create a mock function with vi
    const onClickMock = vi.fn();
    // render our button, referencing the mock function
    render(<Button label="Click me" onClick={onClickMock} />);
    // click the button
    const buttonElement = screen.getByText('Click me');
    buttonElement.click();
    // and expect our mock function to have been called
    expect(onClickMock).toHaveBeenCalled();
  });

})