import { useParams, Link, useNavigate } from "react-router-dom";
import { useCarAdContext } from "../../contexts/CarAdContext";
import styles from "./CarDetails.module.css";
import { useAuthContext } from "../../contexts/AuthContext";
import AddComment from "./AddComment/AddComment";
import * as commentService from "../../services/commentService";
import { useEffect, useState } from "react";

const CarDetails = () => {
  const [comments, setComments] = useState([]);
  const { carAdId } = useParams();
  const { userData, isAuthenticated } = useAuthContext();
  const { onDeleteCarAd, getCarAd } = useCarAdContext();
  const carAd = getCarAd(carAdId);
  const navigate = useNavigate();

  const isOwner = carAd._ownerId === userData._id;

  useEffect(() => {
    commentService.getAll(carAdId).then((result) => {
      setComments(result);
    });
  }, [carAdId]);

  const onCommentSubmit = async (values) => {
    console.log(userData.username);
    const newComment = await commentService.create({
      carAdId,
      author: userData.username,
      comment: values.comment,
    });
    console.log(newComment);
    setComments((state) => [...state, newComment]);
  };

  const onDeleteClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete this Ad`);

    if (result) {
      onDeleteCarAd(carAdId);
      navigate("/catalog");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={carAd.imageUrl} alt={`${carAd.brand} ${carAd.model}`} />
        {!isOwner && isAuthenticated && (
          <AddComment onCommentSubmit={onCommentSubmit} />
        )}
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
        <div>
          <h2>Comments:</h2>
          <ul style={{"list-style": "none"}}>
            {comments &&
              comments.map((c) => (
                <li key={c._id}>
                  <p>
                    {c.author}: {c.comment}
                  </p>
                </li>
              ))}
          </ul>

          {!comments?.length && <p>No comments yet.</p>}
        </div>
        <div className={styles.buttons}>
          <Link to="/catalog">
            <button>Back</button>
          </Link>
          {isOwner && (
            <>
              <Link to={`/catalog/${carAdId}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={onDeleteClick}>Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
