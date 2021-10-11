import React from 'react';
import styles from '../Styles/profile.module.css';

export default function Profile({ registredAt, name }) {
  const objMonth = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь',
  };

  let thisDate =
    registredAt.getDate() +
    ' ' +
    objMonth[registredAt.getMonth()] +
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
