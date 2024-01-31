import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../processes/thunk';

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label>
                <span>Name</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
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
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
