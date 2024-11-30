import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(loginStart());
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(loginSuccess({ email: data.email }));
      navigate('/');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Email"
          type="email"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
          placeholder="Password"
          type="password"
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage; 