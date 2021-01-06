import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { SignInContainer } from '../components/SignIn';

describe('SignIn', () => {
  it('sign in form calls the submit function', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = await render(<SignInContainer handleSubmit={onSubmit} />);

    const usernamefield = getByTestId('username');
    const passwordfield = getByTestId('password');
    const signinBtn = getByTestId('signinBtn');

    await act(async () => {
      await fireEvent.changeText(usernamefield, 'username');
      await fireEvent.changeText(passwordfield, 'password');
      await fireEvent.press(signinBtn);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);

    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'username',
      password: 'password',
    });
  });
});
