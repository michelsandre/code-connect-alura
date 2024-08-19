import logger from '@/logger';
import styles from './post.module.css';
import Image from 'next/image';
import { Avatar } from '@/components/Avatar';
import { remark } from 'remark';
import html from 'remark-html';
import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

async function getPostBySlug(slug) {
  try {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
    if (!response.ok) throw new Error('Falha na rede');

    const data = await response.json();
    if (data.length === 0) {
      return {};
    }

    const post = data[0];

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
  } catch (error) {
    console.log(error);
    logger.error('Algo deu errado: ' + error.message);
    return {};
  }
}

const PagePost = async ({ params }) => {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure className={styles.figure}>
            <Image
              src={post.cover}
              width={961}
              height={300}
              alt={`Capa do post ${post.title}`}
              className={styles.image}
            />
          </figure>
        </header>
        <section className={styles.section}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={`@${post.author.username}`} />
        </footer>
      </article>

      <article>
        <header>
          <h2
            style={{ color: '#888888', fontSize: '22px', lineHeight: '1.5', marginBottom: '8px' }}
          >
            Código:
          </h2>
        </header>
        <div className={styles.card}>
          <section className={`${styles.section} ${roboto_mono.variable}`}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
          </section>
        </div>
      </article>
    </div>
  );
};

export default PagePost;
