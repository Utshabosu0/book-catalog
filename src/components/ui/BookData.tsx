import React from 'react'
import { IBook } from '../../tyoes/globalTypes';
import { Link } from 'react-router-dom';
interface IProps {
    book: IBook;
}
export default function BookData({ book }: IProps) {
    return (
        <div>
            <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
                <Link to={`/book-details/${book._id}`} className="w-full">
                    <img src={book?.image} alt="product" />
                    <h1 className="text-xl font-semibold">{book?.title}</h1>
                </Link>
                <p>Title: {book?.author}</p>
                <p className="text-sm">
                    Author: {book?.genre}
                </p>
                <p className="text-sm">
                    Author: {book?.publicationDate}
                </p>

            </div>
        </div>
    )
}
