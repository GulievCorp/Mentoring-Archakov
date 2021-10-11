import React from 'react';
import styles from '../Styles/profile.module.css';

export default function Profile({ registredAt, name }) {
  const objMotth = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Дека',
  };

  let thisDate =
    registredAt.getDate() +
    ' ' +
    objMotth[registredAt.getMonth()] +
    ' ' +
    registredAt.getFullYear();

  return (
    <div className={styles.profile}>
      <p>
        Привет, <b>{name}</b>
      </p>
      <p>Дата регистрации: {thisDate}</p>
    </div>
  );
}
