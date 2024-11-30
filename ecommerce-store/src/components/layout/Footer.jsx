import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>Your one-stop shop for all your needs. Quality products at the best prices.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Connect With Us</h3>
          <SocialLinks>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </SocialLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 