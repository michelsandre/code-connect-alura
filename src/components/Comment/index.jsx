import Image from 'next/image';
import styles from './comment.module.css';

export const Comment = ({ comment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={comment.author.avatar}
          width={32}
          height={32}
          alt={`Avatar do usuario ${comment.author.name}`}
        />

        <strong className={styles.strong}>@{comment.author.name}</strong>
      </div>

      <p className={styles.p}>{comment.text}</p>
    </div>
  );
};
