/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { Link } from 'react-router-dom'
import signLog from '../assets/signLog.svg'
import { useAppDispatch } from '../redux/hook';
import { createUser } from '../redux/features/users/userSlice';
import { useForm } from 'react-hook-form';
interface SignupFormInputs {
    email: string;
    password: string;
}
export default function SignUpFrom() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormInputs>();

    const dispatch = useAppDispatch()
    const onSubmit = (data: SignupFormInputs) => {
        console.log(data);
        dispatch(createUser({ email: data.email, password: data.password }))
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={signLog} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
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
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
