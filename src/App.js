import React from 'react';
import Form from './Components/home-work-2/Form';
import Profile from './Components/Profile';
import ProfileClass from './Components/ProfileClass';

function App() {
  let date = new Date(2021, 10, 8);

  return (
    <div className="App">
      <Profile name="Анар" registredAt={date} />
      <hr />
      <ProfileClass name="Анар" registredAt={date} />
      <hr />
      <Form />
    </div>
  );
}

export default App;
