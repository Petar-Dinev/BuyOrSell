import { Link } from "react-router-dom";

const CarAdItem = ({carAd }) => {
  return (
    <>
      <Link to={`/catalog/${carAd._id}`}>
        <img src={carAd.imageUrl} alt={carAd.brand} />
        <h2>
          {carAd.brand} - {carAd.model}
        </h2>
        <p>{carAd.price}$</p>
        <p>{carAd.mileage}km.</p>
        <p>
          <b>Details</b>
        </p>
      </Link>
    </>
  );
};

export default CarAdItem;
