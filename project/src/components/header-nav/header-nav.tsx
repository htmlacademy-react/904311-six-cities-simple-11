import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import HeaderNavLogged from '../header-nav-logged/header-nav-logged';
import HeaderNavNotLogged from '../header-nav-not-logged/header-nav-not-logged';
import { getAuthorizationStatus } from '../../store/user/selectors';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? <HeaderNavLogged /> : <HeaderNavNotLogged />}
    </nav>
  );
}

export default HeaderNav;
