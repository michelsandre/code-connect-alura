import { CardPost } from '@/components/CardPost';
// import { posts } from './posts';

import styles from './page.module.css';
import logger from '@/logger';
import Link from 'next/link';
import db from '../../prisma/db';

async function getAllPosts(page) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true,
      },
    });

    return { data: posts, prev: null, next: null };
  } catch (error) {
    logger.error('Falha ao obter posts', { error });
    return { data: [], prev: null, next: null };
  }

  // try {
  //   const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  //   if (!response.ok) throw new Error('Falha na rede');
  //   logger.info('Posts carregados com sucesso');
  //   return response.json();
  // } catch (error) {
  //   logger.error('Ops, algo deu errado: ' + error.message);
  //   return [];
  // }
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.main}>
      {posts && posts.map((post) => <CardPost post={post} key={post.id} />)}
      <footer className={styles.footer}>
        {prev && <Link href={`/?page=${prev}`}>&lt; Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página &gt;</Link>}
      </footer>
    </main>
  );
}
