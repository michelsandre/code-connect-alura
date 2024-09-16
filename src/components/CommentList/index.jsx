import { Comment } from '../Comment';
import styles from './commentList.module.css';

export const CommentList = ({ comments }) => {
  return (
    <ul className={styles.ul}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} key={comment.id} />
        </li>
      ))}
    </ul>
  );
};
