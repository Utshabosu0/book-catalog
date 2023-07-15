/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useEffect, useState } from "react";
import Footer from "../components/common/footer";
import HomeCard from "../components/ui/HomeCard"
import { useGetBooksQuery } from "../redux/api/apiSlice"
import { IBook } from "../tyoes/globalTypes"

export default function Home() {
    // const [book, setBook] = useState([] as IBook[]);
    // useEffect(() => {
    //     fetch('http://localhost:5001/book')
    //         .then((res) => res.json())
    //         .then((data) => setBook(data?.data));
    // }, []);
    const { data, isLoading, error } = useGetBooksQuery(undefined)


    return (
        <div>
            <div className='text-center'>
                <h1>
                </h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2  md:mx-5 '>
                {
                    data?.data.slice(0, 10).map((book: IBook) => {
                        return <HomeCard book={book} />
                    })
                }
            </div>

            <Footer />
        </div >

    )
}
