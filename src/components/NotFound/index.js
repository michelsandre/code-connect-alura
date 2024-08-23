import Image from 'next/image';
import imageHeader from './404.png';
import styles from './error.module.css';
import { ArrowBack } from '../Icons/ArrowBack';
import Link from 'next/link';

export const NotFoundError = () => {
  return (
    <div className={styles.container}>
      <Image src={imageHeader} width={656} height={367} alt="Not Found" />

      <section className={styles.section}>
        <h1 className={styles.h1}>OPS! Página não encontrada.</h1>
        <h2 className={styles.h2}>
          Você pode voltar ao feed e continuar buscando projetos incríveis!
        </h2>

        <Link href={'/'} className={styles.link}>
          Voltar ao feed <ArrowBack color={'#bfffc3'} />
        </Link>
      </section>
    </div>
  );
};
