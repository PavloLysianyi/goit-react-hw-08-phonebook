import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../processes/selectors';
import { logoutThunk } from '../processes/thunk';

export const UserNavigationLink = () => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <details>
            <summary>{name}</summary>
            <ul>
              <li>
                <p>{email}</p>
              </li>
              <li>
                <button type="button" onClick={() => dispatch(logoutThunk())}>
                  Exit
                </button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};
