import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import ChatIcon from '../../assets/ChatIcon.svg';
import toast from 'react-hot-toast';

const formData = {
    username: '',
    password: '',
};

export const Login = () => {
    const { username, password, onInputChange } = useForm(formData);
    const { startLogin, status } = useAuthStore();

    const handleLogin = (event) => {
        event.preventDefault();
        startLogin({ username, password });
    };

    return (
        <div
            className='flex flex-col items-center justify-center min-w-[300px]
        md:min-w-[450px] mx-auto'
        >
            <div className='w-full p-6 rounded-lg shadow-lg bg-secondary bg-clip-padding'>
                <div className='flex items-center justify-center'>
                    <img
                        src={ChatIcon}
                        className='w-20 h-20'
                        alt='Chat App Icon'
                    />
                </div>

                <form>
                    <div>
                        <label className='input input-bordered input-primary flex items-center gap-2 mt-8 bg-inherit text-black'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                className='w-4 h-4 opacity-70'
                            >
                                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
                            </svg>
                            <input
                                type='text'
                                className='grow'
                                placeholder='Username'
                                name='username'
                                value={username}
                                onChange={onInputChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label className='input input-bordered input-primary bg-inherit flex items-center gap-2 mt-4 text-black'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                className='w-4 h-4 opacity-70'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                                    clipRule='evenodd'
                                />
                            </svg>
                            <input
                                type='password'
                                className='grow'
                                placeholder='******'
                                name='password'
                                value={password}
                                onChange={onInputChange}
                            />
                        </label>
                    </div>

                    <div>
                        <button
                            className='btn btn-md btn-primary btn-block mt-4'
                            disabled={status == 'checking'}
                            onClick={handleLogin}
                        >
                            {status == 'checking' ? (
                                <span className='loading loading-spinner text-secondary'></span>
                            ) : (
                                'LOGIN'
                            )}
                        </button>
                    </div>

                    <div className='text-end mt-4 text-black'>
                        <span>Don't have an account? </span>
                        <Link
                            to='/signup'
                            className='hover:text-primary font-bold'
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
