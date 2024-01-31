import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../processes/thunk';

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label>
                <span>Email</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                required
              />
            </div>
            <div>
              <label>
                <span>Password</span>
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="password"
                required
              />
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
