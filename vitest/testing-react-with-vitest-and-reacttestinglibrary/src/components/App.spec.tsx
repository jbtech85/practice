import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App Component', () => {
  it('renders the header', () => {
    render(<App />);
    const appHeader = screen.getByText(/Welcome to our Blog app/i);
    expect(appHeader).toBeInTheDocument();
  });

  it('renders the button component label', () => {
    render(<App />);
    const appButtonLabel = screen.getByText(/Create a post/i);
    expect(appButtonLabel).toBeInTheDocument();
  });

  it('call the button component onClick when clicked', async () => {
    const user = userEvent.setup();
    // const onClickMock = vi.fn();
    render(<App />);
    const buttonElement = screen.getByText('Create a post');

    // buttonElement.click();
    await user.click(buttonElement);

    // expect(onClickMock).toHaveBeenCalled();
  });
})