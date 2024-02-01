import { Outlet } from 'react-router-dom';
import { Header, Container } from './MainBar.styled';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { Suspense } from 'react';

import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu/userMenu';

export default function MainBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Container>
        <Header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}
