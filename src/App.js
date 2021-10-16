import React from 'react';
import './App.css';
import List from './Components/home-work-5/List';
import { Button, InputLabel } from '@material-ui/core';

function App() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [text, setText] = React.useState();

  const [data, setData] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeData = () => {
    if (name && email && text) {
      setData([...data, { fullName: name, email: email, text: text }]);
      setComments([...comments, { fullName: name, text: text, email: email }]);
      console.log(comments);
    } else {
      alert('Заполните форму!');
    }
  };

  React.useEffect(() => {
    if (localStorage.comments) {
      console.log(localStorage.comments);
      // Тут не понял как мне в дату запихать данные из локала, потому что это строка. Обьясни пожалуйста никогда не работал с этим.
      // setData([...data, { fullName: localStorage.comments.name, email: localStorage.comments.email, text: localStorage.comments.text }]);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="App">
      <div className="textBlock">
        <h1>Отзывы</h1>
        {/* Не пойму как написать тут условие, что бы передавать данные либо из даты, либо из localStorage */}
        {data &&
          comments &&
          data.map((item, index) => {
            return (
              <List key={index} fullName={item.fullName} email={item.email} text={item.text} />
            );
          })}
      </div>

      <div className="connection">
        <h2>Обратная связь</h2>
        <InputLabel shrink htmlFor="bootstrap-input">
          <input onChange={changeName} type="text" />
        </InputLabel>
        <InputLabel shrink htmlFor="bootstrap-input">
          <input onChange={changeEmail} type="text" />
        </InputLabel>
        <InputLabel shrink htmlFor="bootstrap-input">
          <input id="text" onChange={changeText} type="text" />
        </InputLabel>
        <Button onClick={changeData} variant="contained" color="primary">
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default App;
