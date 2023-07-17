/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prefer-const */
/* eslint-disable no-dupe-else-if */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useState } from 'react'
import BookData from '../components/ui/BookData'
import { IBook } from '../tyoes/globalTypes'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { setGenre, setSearch, setpublicationDate } from '../redux/features/Book/bookSlice'
import { Link } from 'react-router-dom'
import { useGetBooksQuery } from '../redux/api/apiSlice'

export default function Books() {
    const { register } = useForm();
    const [searchText, setSearchText] = useState('')


    const { data: books, isLoading } = useGetBooksQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000,
    })


    const { genre, publicationDate, search } = useAppSelector((state) => state.book)

    const dispatch = useAppDispatch()

    const handleGenreFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = event.target.value;
        dispatch(setGenre(selectedGenre));
    };
    const handlePublicationDateFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPublication = event.target.value;
        dispatch(setpublicationDate(selectedPublication));

    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const searchText = event.target.value.toLowerCase();
        const filteredBooks = books?.data.filter(
            (book: IBook) =>
                book.title.toLowerCase().includes(searchText) ||
                book.author.toLowerCase().includes(searchText) ||
                book.genre.toLowerCase().includes(searchText)
        );

        dispatch(setSearch(filteredBooks));
    };

    let bookData = search || books?.data;
    if (genre && publicationDate) {
        bookData = books?.data.filter(
            (item: { genre: string, publicationDate: string }) => item.genre === genre && item.publicationDate === publicationDate);
    } else if (genre) {
        bookData = books?.data.filter(
            (item: { genre: string }) => item.genre === genre);
    }
    else if (publicationDate) {
        bookData = books?.data.filter(
            (item: { publicationDate: string }) => item.publicationDate === publicationDate
        )
    } else {
        bookData = books?.data
    }

    return (
        <>
            <div className='flex justify-between mx-[100px]'>
                <label className="relative block ml-[300px]">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="w-[300px] h-[50px]  placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search by title author or genre" type="text" name="search"
                        onChange={handleSearch} value={searchText}
                    />
                </label>
                <Link className="btn px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-[400px] mb-5" to={'/addNewBook'}>Add New Book </Link>

            </div>

            <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
                <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">

                    <div className="form-control w-full max-w-xl"

                    >
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select {...register('genre')} className="select input-bordered w-full max-w-xl"
                            value={genre || ''}
                            onChange={handleGenreFilterChange}
                        >
                            <option value="">None</option>
                            {books?.data.map((book: IBook) => (
                                <option key={book._id} value={book.genre}>
                                    {book.genre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs"
                    >
                        <label className="label">
                            <span className="label-text">Publication Date</span>
                        </label>
                        <select {...register('publicationDate')} className="select input-bordered w-full max-w-xs"
                            onChange={handlePublicationDateFilterChange}
                            value={publicationDate || ''}

                        >
                            <option value="">None</option>
                            {books?.data.map((book: IBook) => (
                                <option key={book._id} value={book.publicationDate}>
                                    {book.publicationDate}
                                </option>
                            ))}

                        </select>
                    </div>

                </div>
                <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
                    {
                        bookData?.map((book: IBook) => {
                            return <BookData book={book} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
