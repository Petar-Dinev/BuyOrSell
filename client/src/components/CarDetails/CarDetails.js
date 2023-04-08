import { useParams, Link } from 'react-router-dom';
import { useCarAdContext } from '../../contexts/CarAdContext';
import styles from './CarDetails.module.css';

const CarDetails = () => {
  const { carAdId } = useParams();
  const { getCarAd } = useCarAdContext();
  const carAd = getCarAd(carAdId);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={carAd.imageUrl} alt={`${carAd.brand} ${carAd.model}`} />
        <form className={styles.form}>
          <label htmlFor="comment">Add a comment:</label>
          <textarea id="comment" name="comment"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>
          {carAd.brand} {carAd.model}
        </h2>
        <div className={styles.info}>
          <p>
            Made: {carAd.year} - {carAd.mileage} miles
          </p>
          <p>Price: ${carAd.price}</p>
          <p>Owner phone: {carAd.ownerPhone}</p>
          <p>Description: {carAd.description}</p>
        </div>
        <div className={styles.buttons}>
        <Link to="/catalog" ><button>Back</button></Link>
          <Link to={`/catalog/${carAdId}/edit`}><button>Edit</button></Link>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
