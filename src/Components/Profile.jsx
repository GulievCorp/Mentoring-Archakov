import React from 'react';
import styles from '../Styles/profile.module.css';

export default function Profile(props) {
  function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(
          ',',
        )[num - 1];
  }

  let thisDate =
    props.registredAt.getDate() +
    ' ' +
    montoToStr(props.registredAt.getMonth()) +
    ' ' +
    props.registredAt.getFullYear();

  return (
    <div className={styles.profile}>
      <p>
        Привет, <b>{props.name}</b>
      </p>
      <p>Дата регистрации: {thisDate}</p>
    </div>
  );
}
