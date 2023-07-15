/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { setUser } from '../../redux/features/users/userSlice';


export default function Navbar() {
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        console.log('Logout');
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(setUser(null));
        });
    };
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />

                </div>
            </div>
            <div className="flex-none gap-2">

                <li className='list-none mx-5'><NavLink className='nav-button-link' to="/">Home</NavLink></li>
                <li className='list-none mx-5'><NavLink className='nav-button-link' to="/allBooks">Books</NavLink></li>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://github.com/shadcn.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        {
                            !user.email &&
                            <>
                                <li>
                                    <NavLink to={'/login'}>LogIn</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/signup'}>SignUp</NavLink>
                                </li>
                            </>
                        }
                        {
                            user.email &&
                            <li onClick={handleLogout}>

                                <a className="justify-between">
                                    LogOut
                                </a>
                            </li>

                        }

                    </ul>
                </div>
            </div>
        </div>
    );
}