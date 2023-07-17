/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Footer from "../components/common/footer";
import HomeCard from "../components/ui/HomeCard"
import { useGetBooksQuery } from "../redux/api/apiSlice"
import { IBook } from "../tyoes/globalTypes"

export default function Home() {
    const { data } = useGetBooksQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000,
    })

    return (
        <div>
            <div className='text-start'>
                <h1 className="text-4xl"> TOP BOOKS
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
