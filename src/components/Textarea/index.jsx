import styles from './textarea.module.css';

export const Textarea = ({ children, ...rest }) => {
  return (
    <textarea {...rest} className={styles.textarea}>
      {children}
    </textarea>
  );
};
