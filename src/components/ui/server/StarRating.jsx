import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 > 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex justify-center text-orange-400">
      {Array(fullStars).fill(<FaStar />)}
      {halfStar ? <FaStarHalfAlt /> : ''}
      {Array(emptyStars).fill(<FaRegStar />)}
    </div>
  );
};

export default StarRating;
