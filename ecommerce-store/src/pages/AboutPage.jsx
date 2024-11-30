import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>Welcome to our e-commerce store! We are dedicated to providing the best shopping experience for our customers.</p>
      <h2>Our Mission</h2>
      <p>To provide high-quality products at competitive prices while ensuring excellent customer service.</p>
      <h2>Our Vision</h2>
      <p>To become the leading e-commerce platform known for reliability, quality, and customer satisfaction.</p>
    </AboutContainer>
  );
};

export default AboutPage; 