import { Link } from 'react-router';
import downloadImg from  '../assets/icon-downloads.png'
import starImg from  '../assets/icon-ratings.png'

const Card = ({product}) => {

  const {title ,image ,downloads ,ratingAvg , id} = product;
  return (
    <div>
      <Link to={`/app-details/${id}`}>
      <div className="card bg-base-100  shadow-sm mx-4 my-4 hover:scale-105 transition ease-in-out">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-[100px] w-[100px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className='flex'>
            <p className='flex gap-1 bg-gray-300 rounded-3xl px-3 py-2'><img src={downloadImg} alt="" className="w-5"/>{downloads}</p>
            <p className='flex gap-1 bg-gray-300 rounded-3xl px-3 py-2'><img src={starImg} alt="" className="w-5"/>{ratingAvg}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
