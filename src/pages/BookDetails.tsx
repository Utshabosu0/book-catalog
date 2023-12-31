/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDeleteBookMutation, useSingleBookQuery } from '../redux/api/apiSlice';

export default function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useSingleBookQuery(id)

    const [deleteBook, { isLoading }] = useDeleteBookMutation();

    const handleDeleteBook = async () => {
        try {
            await deleteBook(id).unwrap();
            navigate('/');
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 mb-5">
                <div className="w-full">
                    <img className='w-[30%] ml-[200px]' src={data?.image} alt="" />
                </div>
                <div className="w-[30%] space-y-3 mr-[300px]">
                    <h1 className="text-3xl font-semibold">Title:{data?.title}</h1>
                    <p className="text-xl">Author: {data?.author}</p>
                    <p className="text-xl">Genre: {data?.genre}</p>
                    <p className="text-xl">Publication Date: {data?.publicationDate}</p>
                </div>
            </div>
            <div>
                <Link className="btn bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-[1100px] mb-3 " to={`/updateBook/${data?._id}`}>Edit Book </Link>
                <button className="btn bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 ml-[1100px] mb-5"
                    onClick={handleDeleteBook}>Delete bBook </button>
            </div>
        </>
    );
}
