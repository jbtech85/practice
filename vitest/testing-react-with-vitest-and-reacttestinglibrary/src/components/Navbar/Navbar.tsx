
import { BookOpen, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Nav, NavContainer, NavContent, Logo, 
  NavLinks, NavLink, SignOutButton } from './Navbar.style';


export function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <Logo to="/">
            <BookOpen size={24} />
            <span>Annex Blog</span>
          </Logo>

          <NavLinks>
            {user ? (
              <>
                <NavLink to="/create">Create Post</NavLink>
                <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
              </>
            ): (
              <>
                <NavLink to="/login">
                  <LogIn size={18} />
                  <span>Sign In</span>
                </NavLink>

                <NavLink to="/register">
                  <UserPlus size={18} />
                  <span>Sign Up</span>
                </NavLink>
              </>
            )}
          </NavLinks>
        </NavContent>
      </NavContainer>
    </Nav>
  );
}