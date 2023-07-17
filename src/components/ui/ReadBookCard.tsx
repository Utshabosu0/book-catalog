import React from 'react'
import { IBook } from '../../tyoes/globalTypes';
import { removeFromReadBooks } from '../../redux/features/wishList/wishListSlice';
import { useAppDispatch } from '../../redux/hook';
interface IProps {
    book: IBook;
}

export default function ReadBookCard({ book }: IProps) {
    const disPatch = useAppDispatch();

    return (
        <div>
            <div className="rounded-2xl h-[500px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
                <img src={book?.image} alt="product" className='ml-10 mb-5' />
                <h1 className=" text-xl font-semibold">Title:{book?.title}
                </h1>
                <p>Author: {book?.author}</p>
                <p className="text-sm">
                    Genre: {book?.genre}
                </p>
                <p className="text-sm">
                    publication Date: {book?.publicationDate}
                </p>
                <div>
                    <button className='btn btn-info'
                        onClick={() => disPatch(removeFromReadBooks(book))}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
