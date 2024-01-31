import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn } from '../processes/selectors';
import { UserNavigationLink } from './UserNavigationLink';
import { NavigationLink } from './NavigationLink';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  console.log(isLoggedIn);

  return (
    <div>
      <div>
        <Link to="/">PHONEBOOK</Link>
      </div>
      {isLoggedIn ? <UserNavigationLink /> : <NavigationLink />}
    </div>
  );
};
