import React from 'react';
import styles from '../Styles/profile.module.css';

class ProfileClass extends React.Component {
  objMotth = {
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

  Date =
    this.props.registredAt.getDate() +
    ' ' +
    this.objMotth[this.props.registredAt.getMonth()] +
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
