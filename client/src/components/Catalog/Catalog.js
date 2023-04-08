import React from 'react';
import styles from './Catalog.module.css';
import { useCarAdContext } from '../../contexts/CarAdContext';
import CarAdItem from './CarAdItem/CarAdItem';

const Catalog = () => {
    const {carAds} = useCarAdContext()

  return (
    <div className={styles.catalog}>
      <h1>Catalog</h1>
      <ul className={styles.products}>
        {carAds.map((carAd) => (
          <li key={carAd._id} className={styles.product}>
            <CarAdItem carAd={carAd} />
          </li>
        ))}
        {carAds.length === 0 && <p><b>Not Ads yet!</b></p>}
      </ul>
    </div>
  );
};

export default Catalog;
