import React from 'react';

export default function Form() {
  let email = '';
  let password = '';

  const handleSubmit = () => {
    email || password
      ? console.log('Email ' + email + ' Password' + password)
      : alert('Вы не заполнили формы');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="E-Mail" onChange={(e) => (email = e.target.value)} />
        <input type="password" placeholder="Пароль" onChange={(e) => (password = e.target.value)} />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
