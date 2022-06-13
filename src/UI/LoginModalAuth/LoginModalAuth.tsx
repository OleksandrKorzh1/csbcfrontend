import React from 'react';
import clsx from 'clsx';
import styles from './loginModalAuth.module.scss';
import close from '../../images/login/close.svg';

interface ILoginModalAuth {
  error:string;
  closeModal: () => void;
}

const LoginModalAuth = ({ error, closeModal }: ILoginModalAuth):JSX.Element => (
  <div className={styles.window}>
    <div className={clsx(styles.login__modal, error && styles.login__modal__error)}>
      <button
        className={styles.login__modal__button}
        type="button"
        onClick={closeModal}
      >
        <img className={styles.login__modal__button__iClose} src={close} alt=" " />
      </button>
      <div className={styles.login__modal__div}>{error}</div>
    </div>
  </div>
);

export default LoginModalAuth;
