import { NavLink } from 'react-router-dom';

export const NavigationLink = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};
