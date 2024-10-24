import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "./ReviewCard.css"; 

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;

  return (
    <div className="review-card">
      <div className="review-card-content">
        <Image
          src="/images/q.png"
          alt="quote image"
          width={50}
          height={50}
          className="ml-auto"
        />
        <p className="review-text">{clientReview}</p>
        <div className="rating-box">
          <span>{rating}/5</span>
          <FaStar className="star-icon" />
        </div>
      </div>

      <div className="client-info">
        <div className="client-info-content">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="client-name">{name}</h1>
            <p className="client-profession">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
