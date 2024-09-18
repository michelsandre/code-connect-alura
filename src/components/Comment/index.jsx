import Image from 'next/image';
import styles from './comment.module.css';

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        width={32}
        height={32}
        alt={`Avatar do usuario ${comment.author.name}`}
      />

      <strong>@{comment.author.name}</strong>

      <p>{comment.text}</p>
    </div>
  );
};
