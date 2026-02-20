import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Register } from './Register';
import { useAuth } from '../../contexts/AuthContext';

vi.mock('../../contexts/AuthContext', () => ({
  useAuth: vi.fn()
}));
const mockSignUp = vi.fn();

describe('Register Component', () => {
  beforeEach(() => {
    (useAuth as Mock).mockReturnValue({ signUp: mockSignUp });
  });

  const setup = () => render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  it('renders form elements correctly', () => {
    setup();
    expect(screen.getByTestId('register-header')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  });

  // note, usually should always use user-event instead. this is just to display what fireEvent can do.
//   it('shows validation errors for incorrect inputs', async () => {
//     setup();
//     fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'me'} });
//     fireEvent.change(screen.getByPlaceholderText('Email address'), { target: { value: 'invalid@email'} });
//     fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '1234567'} });

//     fireEvent.click(screen.getByTestId('create-account-btn'));
    
//     expect(await screen.findByText('Username must be at least 3 characters long')).toBeInTheDocument();
//     expect(await screen.findByText('Invalid email format')).toBeInTheDocument();
//     expect(await screen.findByText('Password must be at least 8 characters long')).toBeInTheDocument();
//   });

  it('shows validation errors for incorrect inputs', async () => {
    const user = userEvent.setup();
    setup();

    await user.type(screen.getByPlaceholderText('Username'), 'me');
    await user.type(screen.getByPlaceholderText('Email address'), 'invalid@email');
    await user.type(screen.getByPlaceholderText('Password'), '1234567');

    await user.click(screen.getByTestId('create-account-btn'));
    
    expect(await screen.findByText('Username must be at least 3 characters long')).toBeInTheDocument();
    expect(await screen.findByText('Invalid email format')).toBeInTheDocument();
    expect(await screen.findByText('Password must be at least 8 characters long')).toBeInTheDocument();
  });

  it('submits the form when inputs are valid', async () => {
    const user = userEvent.setup();
    setup();

    // the order the fields are in
    await user.type(screen.getByPlaceholderText('Username'), 'greatUserName');
    await user.type(screen.getByPlaceholderText('Email address'), 'test@test.com');
    await user.type(screen.getByPlaceholderText('Password'), 'ideallyLotMoreTestsHere');
    
    await user.click(screen.getByTestId('create-account-btn'));

    // vs the order of the fields in the function
    expect(mockSignUp).toHaveBeenCalledWith('test@test.com', 'ideallyLotMoreTestsHere', 'greatUserName');
  });

  it('displays an error message if signUp fails', async () => {
    mockSignUp.mockRejectedValue(new Error('what is in here is arbitrary in this setup'));
    const user = userEvent.setup();
    setup();

    await user.type(screen.getByPlaceholderText('Username'), 'greatUserName');
    await user.type(screen.getByPlaceholderText('Email address'), 'test@test.com');
    await user.type(screen.getByPlaceholderText('Password'), 'ideallyLotMoreTestsHere');
    
    await user.click(screen.getByTestId('create-account-btn'));

    expect(await screen.findByText('Failed to create account1')).toBeInTheDocument();
  });

  
});