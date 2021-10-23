import React from 'react';

export const Users = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    await fetch('https://61740e51110a740017223247.mockapi.io/posts').then((res) => {
      res.json().then((result) => {
        setUsers(result);
      });
    });
  };

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li>{user.username}</li>;
        })}
        <button onClick={getUsers}>Добавить пользователей</button>
      </ul>
    </div>
  );
};
