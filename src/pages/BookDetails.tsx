/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../redux/api/apiSlice';
import Footer from '../components/common/footer';

export default function BookDetails() {
    const { id } = useParams();

    const { data: book, isLoading, error } = useSingleBookQuery(id)



    return (
        <>
            <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 mb-48">
                <div className="w-full">
                    <img className='w-[60%]' src={book?.image} alt="" />
                </div>
                <div className="w-[50%] space-y-3">
                    <h1 className="text-3xl font-semibold">Title:{book?.title}</h1>
                    <p className="text-xl">Author: {book?.author}</p>
                    <p className="text-xl">Genre: {book?.grnre}</p>
                    <p className="text-xl">Publication Date: {book?.publicationDate}</p>


                </div>
            </div>
            <Footer />
        </>
    );
}
