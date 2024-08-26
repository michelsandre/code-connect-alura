import { Button } from '../Button';
import styles from './searchform.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.form} action="/">
      <input
        name="q"
        className={styles.input}
        type="text"
        placeholder="Digite o que você procura"
      />
      <Button>Buscar</Button>
    </form>
  );
};
