import authSelectors from 'redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import { Wrapper, Button, WelcomeText } from './userMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Wrapper>
      {name !== null && <WelcomeText>{`Welcome,  ${name}`}</WelcomeText>}

      <Button type="Button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
}
