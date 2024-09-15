'use client';

import { useRef } from 'react';
import { IconButton } from '../IconButton';
import { Chat } from '../Icons/Chat';
import { Modal } from '../Modal';
import styles from './modal.module.css';
import { Subheading } from '../Subheading';
import { Textarea } from '../Textarea';
import { SubmitButton } from '../SubmitButton';

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form
          action={action}
          onSubmit={() => modalRef.current.closeModal()}
          className={styles.form}
        >
          <Subheading>Deixe seu comentário sobre o post:</Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
