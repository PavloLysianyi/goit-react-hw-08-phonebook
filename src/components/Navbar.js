import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../processes/slice';
import { UserNavLinks } from './UserNavLinks';
import { NavLinks } from './NavLinks';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="navbar bg-green-500 text-white font-bold">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          PHONEBOOK
        </Link>
      </div>
      {isLoggedIn ? <UserNavLinks /> : <NavLinks />}
    </div>
  );
};
