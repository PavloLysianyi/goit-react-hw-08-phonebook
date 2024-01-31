import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn } from '../processes/selectors';
import { UserNavigationLink } from './UserNavigationLink';
import { NavigationLink } from './NavigationLink';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="navbar bg-indigo-500 text-white font-bold">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          PHONEBOOK
        </Link>
      </div>
      {isLoggedIn ? <UserNavigationLink /> : <NavigationLink />}
    </div>
  );
};
