/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import BookData from '../components/ui/BookData'
import { Slider } from '@radix-ui/react-slider'
import { useAllBooksQuery } from '../redux/api/apiSlice'
import { IBook } from '../tyoes/globalTypes'

export default function Books() {
    const { data, isLoading, error } = useAllBooksQuery(undefined)

    // const handleSearch = event => {
    //     const searchText = event.target.value;
    //     // console.log(searchText);
    //     const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    //     setDisplayProducts(matchProducts);
    //     // console.log(matchProducts.length);
    // }
    return (
        <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
            <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
                <div>
                    <h1 className="text-2xl uppercase">Availability</h1>
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <button>Search</button>
                </div>
                <div className="space-y-3 ">
                    <h1 className="text-2xl uppercase">Price Range</h1>
                    <div className="max-w-xl">
                        <Slider
                            defaultValue={[150]}
                            max={150}
                            min={0}
                            step={1}

                        />
                    </div>
                    {/* <div>From 0$ To {priceRange}$</div> */}
                </div>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
                {
                    data?.data.map((book: IBook) => {
                        return <BookData book={book} />
                    })
                }
            </div>
        </div>
    )
}
