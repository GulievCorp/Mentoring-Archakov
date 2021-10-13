import React from 'react';
import Form from './Components/home-work-2/Form';
import Todo from './Components/home-work-3/Todo';
import Profile from './Components/Profile';
import ProfileClass from './Components/ProfileClass';

function App() {
  let date = new Date(2021, 10, 8);

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
