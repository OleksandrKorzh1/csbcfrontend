import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { LoginParams } from '../../hooks/useAuth';
import { useAuthContext } from '../../context/useAuthContext';
import Layout from '../../loyout/Layout';

const Login = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const { postLogin } = useAuthContext();
  const [credentials, setCredentials] = useState<LoginParams>({
    email: '',
    password: '',
  });
  const [check, setCheck] = useState(true);

  const login = () => {
    // if (credentials.password.length >= 8) {
    postLogin(credentials, check);
    // }
  };

  return (
    <Layout>
      <div className={styles.login}>

        <div className={styles.login__div}>
          <div className={styles.login__form}>
            <input
              className={styles.login__form__input}
              type="email"
              placeholder="Електронна адреса"
              value={credentials.email}
              onChange={(event) => setCredentials({
                ...credentials,
                email: event.target.value,
              })}
            />
            <input
              className={styles.login__form__input}
              type="password"
              placeholder="Пароль"
              value={credentials.password}
              onChange={(event) => setCredentials({
                ...credentials,
                password: event.target.value,
              })}
            />
            <p
              className={clsx(
                styles.login__form__passwort,
                credentials.password.length < 8 && styles.login__form__password__error,
              )}
            >
              Не менше 8 символів
            </p>
            <label>
              <input
                className={styles.login__form__input}
                checked={check}
                onChange={(event) => {
                  setCheck(event.target.checked);
                  console.log(check);
                }}
                type="checkbox"
                name="SaveData"
                id="Зберегти дані"
              />
              Зберегти дані
            </label>
            <button
              type="submit"
              className={styles.login__form__button}
              disabled={!credentials.email || !credentials.password}
              onClick={login}
            >
              Вхід
            </button>
            {children}
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default Login;
