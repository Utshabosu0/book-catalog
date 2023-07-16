/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { loginUser } from '../redux/features/users/userSlice';
import signLog from '../assets/signLog.svg'


interface LogInFormInputs {
    email: string;
    password: string;
}
export default function LogInFrom() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInFormInputs>();
    const { user, isLoading } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || { pathname: '/' }
    const onSubmit = (data: LogInFormInputs) => {
        console.log(data);
        dispatch(loginUser({ email: data.email, password: data.password }))
    }
    useEffect(() => {
        if (user.email && !isLoading) {
            navigate(from, { replace: true });
        }
    }, [user.email, isLoading, navigate, from])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={signLog} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Log In</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    {...register('email', { required: 'Email is required' })}
                                    className="input input-bordered" />
                                {errors?.email && <p>{errors?.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    id="password"
                                    placeholder="your password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    {...register('password', { required: 'Password is required' })} className="input input-bordered" />
                                {errors.password && <p>{errors.password.message}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Don't Have an Account? <Link className='text-orange-600 font-bold' to="/signup">SignUp</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
