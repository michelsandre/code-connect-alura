import Image from 'next/image';
import { Avatar } from '../Avatar';
import styles from './cardPost.module.css';
import Link from 'next/link';
import { IconButton } from '../IconButton';
import { ThumbsUp } from '../Icons/ThumbsUp';
import { incrementThumbsUp, postComment } from '@/actions';
import { ThumbsUpButton } from './ThumbsUpButton';
import { ModalComment } from '../ModalComment';

export const CardPost = ({ post }) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitComment = postComment.bind(null, post);

  return (
    // <Link href={`/posts/${post.slug}`} className={styles.link}>
    <article className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post ${post.title}`}
            className={styles.image}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment action={submitComment} />
            <p>{post.comments.length}</p>
          </div>
        </div>
        <Avatar
          imageSrc={post.author.avatar}
          name={`@${post.author.username}`}
        />
      </footer>
    </article>
    // </Link>
  );
};
