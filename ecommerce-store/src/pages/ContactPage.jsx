import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
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

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          {...register('name', { required: true })} 
          placeholder="Your Name"
        />
        {errors.name && <span>This field is required</span>}
        
        <Input 
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
          placeholder="Your Email"
        />
        {errors.email && <span>Please enter a valid email</span>}
        
        <TextArea 
          {...register('message', { required: true })} 
          placeholder="Your Message"
        />
        {errors.message && <span>This field is required</span>}
        
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default ContactPage; 