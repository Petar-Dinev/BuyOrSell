import { useForm } from "../../../hooks/useForm";
import styles from './AddComment.module.css'

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <article >
            <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="comment">Add a comment:</label>
            <textarea id="comment" name="comment" value={values.comment} onChange={changeHandler} ></textarea>
            <button type="submit">Submit</button>
          </form>
        </article>
    );
};

export default AddComment