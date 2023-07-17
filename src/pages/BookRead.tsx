import React from 'react'
import { useAppSelector } from '../redux/hook'
import ReadBookCard from '../components/ui/ReadBookCard'
import { IBook } from '../tyoes/globalTypes'

export default function BookRead() {
    const { readBooks } = useAppSelector((state) => state.wishList)

    return (
        <>
            <h1 className='text-4xl'>Book Wish List</h1>
            <div className="grid grid-cols-12 max-w-7xl mx-auto ">
                <div className="col-span-12 grid grid-cols-4 gap-10 pb-20">
                    {readBooks?.map((book: IBook) => (
                        <ReadBookCard book={book} />
                    ))}
                </div>
            </div>
        </>
    )
}
