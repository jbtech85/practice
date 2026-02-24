import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

export const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;

  &:hover {
    color: #4b5563;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #4b5563;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

export const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;
