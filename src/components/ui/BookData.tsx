
import { ToastContainer, toast } from 'react-toastify';
import { IBook } from '../../tyoes/globalTypes';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hook';
import { addToWishList } from '../../redux/features/wishList/wishListSlice';
interface IProps {
    book: IBook;
}

export default function BookData({ book }: IProps) {
    const disPatch = useAppDispatch();
    const handleAddWishList = (book: IBook) => {
        disPatch(addToWishList(book));
        toast.success('Book added WishList');
    };

    return (
        <div>
            <div className="rounded-2xl h-[500px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
                <Link to={`/book-details/${book._id}`} className="w-full">
                    <img src={book?.image} alt="product" className='ml-10 mb-5' />
                    <h1 className=" text-xl font-semibold">Title:{book?.title}
                    </h1>
                </Link>
                <p>Author: {book?.author}</p>
                <p className="text-sm">
                    Genre: {book?.genre}
                </p>
                <p className="text-sm">
                    publication Date: {book?.publicationDate}
                </p>
                <div>
                    <button className='btn btn-success mb-3' onClick={() => handleAddWishList(book)}>
                        Add to wishList
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
