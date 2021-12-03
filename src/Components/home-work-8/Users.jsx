import React from 'react';

export const Users = () => {
  const [users, setUsers] = React.useState([]);

  // Закомнтированное не правильно

  // const getUsers = async () => {
  //   await fetch('https://61740e51110a740017223247.mockapi.io/posts').then((res) => {
  //     try {
  //       res.json().then((result) => {
  //         setUsers(result);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // };

  const getUsers = async () => {
    try {
      const res = await fetch('https://61740e51110a740017223247.mockapi.io/posts');
      const json = res.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    }
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
