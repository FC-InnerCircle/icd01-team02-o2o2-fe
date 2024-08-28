/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colors from 'styles/color';

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { type SubmitHandler } from 'react-hook-form';

import * as z from "zod";
import { loginSchema } from 'schema';

type SignInFormType = z.infer<typeof loginSchema>;

const SignIn = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<SignInFormType> = (data) => {
    console.log(data);
    reset();
  }

  return (
    <form css={[_container]} onSubmit={handleSubmit(onSubmit)}>
      <div css={_formContainer}>
        <h2 css={_title}>Sign In</h2>
        <input
          css={_input}
          type="text"
          placeholder="Email"
          {...register("accountId")}
        />
        {errors.accountId && <p css={_errorText}>{errors.accountId.message}</p>}

        <input
          css={_input}
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <p css={_errorText}>{errors.password.message}</p>}

        <button
          css={_button}
          type='submit'
        >Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;

const _container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/src/assets/login.jpg') no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    background-position: center;
    background-size: cover;
  }
`;

const _formContainer = css`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 90%;
  }
`;

const _title = css`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const _input = css`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

const _button = css`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #6e8efb;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #5a78d1;
    transform: translateY(-2px);
  }
`;

const _errorText = css`
  color: ${colors.danger};
  font-size: 12px;
  margin-bottom: 10px;
`;
