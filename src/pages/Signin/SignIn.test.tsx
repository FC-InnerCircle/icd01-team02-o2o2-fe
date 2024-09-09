import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from '.';

describe('SignIn Page', () => {
  it('should render the form fields and submit button', () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /login/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  })

  it('should input email and password', async () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    await userEvent.type(emailInput, 'wkddnjs@naver.com');
    await userEvent.type(passwordInput, 'test123#');

    await waitFor(() => {
      expect(emailInput).toHaveValue('wkddnjs@naver.com');
      expect(passwordInput).toHaveValue('test123#');
    })
  })

  it('should show error message when email is invalid', async () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button');

    await userEvent.type(emailInput, 'wkddnjs');
    await userEvent.click(submitButton);

    const errorMessage = await screen.findByText('이메일을 입력해주세요.')
    await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
    });
  })

  it('should show error message when password is invalid', async () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button');

    await userEvent.type(emailInput, 'wkddnjs7310@naver.com');
    await userEvent.click(submitButton);

    const errorMessage = await screen.findByText('비밀번호는 최소 6자리 이상이어야 합니다.')
    await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
    });
  })

  it('should show reset when password is valid', async () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button');

    await userEvent.type(emailInput, 'wkddnjs7310@naver.com');
    await userEvent.type(passwordInput, 'test123!@#');
    await userEvent.click(submitButton);

    await waitFor(() => {
        expect(emailInput).toHaveValue('');
        expect(passwordInput).toHaveValue('');
    });
  })
});
