import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const RegisterContainer = styled.div`
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

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Registration successful:', data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <RegisterContainer>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', { required: 'Name is required' })}
          placeholder="Full Name"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

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

        <Input
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: value => value === watch('password') || 'Passwords do not match'
          })}
          placeholder="Confirm Password"
          type="password"
        />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

        <Button type="submit">Register</Button>
      </Form>
    </RegisterContainer>
  );
};

export default RegisterPage; 