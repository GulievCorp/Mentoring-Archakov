import React from 'react';
import styles from '../Styles/profile.module.css';

class ProfileClass extends React.Component {
    montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(
          ',',
        )[num - 1];
  }

  Date =
    this.props.registredAt.getDate() +
    ' ' +
    this.montoToStr(this.props.registredAt.getMonth()) +
    ' ' +
    this.props.registredAt.getFullYear();
    
    render(){
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