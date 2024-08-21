import Image from 'next/image';
import imageHeader from './500.png';
import styles from './error.module.css';
import { ArrowBack } from '../Icons/ArrowBack';
import Link from 'next/link';

export const GenericError = () => {
  return (
    <div className={styles.container}>
      <Image src={imageHeader} width={656} height={367} />

      <section className={styles.section}>
        <h1 className={styles.h1}>Opa! Um erro ocorreu.</h1>
        <h2 className={styles.h2}>
          Não conseguimos carregar a página, volte para seguir navegando
        </h2>

        <Link href={'/'} className={styles.link}>
          Voltar ao feed <ArrowBack color={'#bfffc3'} />
        </Link>
      </section>
    </div>
  );
};
