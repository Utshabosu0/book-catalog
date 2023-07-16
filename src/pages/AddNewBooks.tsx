/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface AddNewBook {
    image: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
}

export default function AddNewBooks() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<AddNewBook>();

    const imageStorageKey = '4295ac4d47b569312bea67b440cdbdbb';

    const onSubmit = (data: AddNewBook) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const book = {
                        title: data.title,
                        author: data.author,
                        genre: data.genre,
                        publicationDate: data.publicationDate,
                        image: image
                    }
                    // send to your database 
                    fetch('http://localhost:5001/book', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Book added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the book');
                            }
                        })

                }

            })
    }


    return (
        <div className='pl-24'>
            <h2 className="text-4xl">Add a New Book</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Title"
                        className="input input-bordered w-full max-w-xs"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Title is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Author"
                        className="input input-bordered w-full max-w-xs"
                        {...register("author", {
                            required: {
                                value: true,
                                message: 'Author is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.author?.type === 'required' && <span className="label-text-alt text-red-500">{errors.author.message}</span>}
                    </label>
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Genre</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Genre"
                        className="input input-bordered w-full max-w-xs"
                        {...register("genre", {
                            required: {
                                value: true,
                                message: 'Genre is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.genre?.type === 'required' && <span className="label-text-alt text-red-500">{errors.genre.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Publication Date</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Publication Date"
                        className="input input-bordered w-full max-w-xs"
                        {...register("publicationDate", {
                            required: {
                                value: true,
                                message: 'Publication Date is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.publicationDate?.type === 'required' && <span className="label-text-alt text-red-500">{errors.publicationDate.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-black bg-cyan-800' type="submit" value="Add Book" />
                <ToastContainer />
            </form>
        </div>
    );
}
