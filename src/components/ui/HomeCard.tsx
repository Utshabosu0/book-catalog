
import React from 'react'
import { IBook } from '../../tyoes/globalTypes';


interface IProps {
    book: IBook;
}
export default function HomeCard({ book }: IProps) {

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='pl-5 pb-10 w-full' src={book?.image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{book?.title}</h2>
                <h5>{book?.author}</h5>
                <p>{book?.genre}</p>
                <p>{book?.publicationDate}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Details</button>
                </div>
            </div>
        </div>
    )
}
