import { CardPost } from '@/components/CardPost';
// import { posts } from './posts';

import styles from './page.module.css';
import logger from '@/logger';
import Link from 'next/link';
import db from '../../prisma/db';

async function getAllPosts(page) {
  try {
    const perPage = 4;
    const skip = (page - 1) * perPage;

    const totalItems = await db.post.count();
    const totalPages = Math.ceil(totalItems / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      orderBy: { createdAt: 'desc' },
      include: {
        author: true,
      },
    });

    return { data: posts, prev: prev, next: next };
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
  const currentPage = parseInt(searchParams?.page || 1);
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
