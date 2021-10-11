import React from 'react';

export default function Form() {
  let email = '';
  let password = '';

  const changeValue = (event) => {
    if (event.target.name === 'Email') {
      email = event.target.value;
      console.log(email);
    } else if (event.target.name === 'Password') {
      password = event.target.value;
    }
  };

  const handleSubmit = () => {
    if (email) {
      console.log('Email ' + email);
    } else if (password) {
      console.log('Password: ' + password);
    } else {
      alert('Вы не заполнили форму');
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input name="Email" type="text" placeholder="E-Mail" onChange={(e) => changeValue(e)} />
        <input
          name="Password"
          type="password"
          placeholder="Пароль"
          onChange={(e) => changeValue(e)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
