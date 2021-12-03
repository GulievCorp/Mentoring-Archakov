import React from 'react';
import styles from '../Styles/profile.module.css';

class ProfileClass extends React.Component {
  objMonth = {
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
    11: 'Дека',
  };

  Date =
    this.props.registredAt.getDate() +
    ' ' +
    this.objMonth[this.props.registredAt.getMonth()] +
    ' ' +
    this.props.registredAt.getFullYear();

  render() {
    return (
      <div className={styles.profile}>
        <p>
          Привет, <b>{this.props.name}</b>
        </p>
        <p>Дата регистрации: {this.Date}</p>
      </div>
    );
  }
}

export default ProfileClass;
