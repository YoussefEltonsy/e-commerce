import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: ${({ theme }) => theme.spacing.md};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CartIcon = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${({ theme }) => theme.colors.danger};
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.75rem;
  }
`;

const Header = () => {
  const { items } = useSelector(state => state.cart);
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">E-Store</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <CartIcon>
              <FaShoppingCart />
              {items.length > 0 && <span>{items.length}</span>}
            </CartIcon>
          </Link>
          {isAuthenticated ? (
            <Link to="/profile"><FaUser /></Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 