import React from 'react';
import List from './Components/home-work-4/List';
import EmptyBlock from './Components/home-work-4/EmptyBlock';
import './App.css';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

function App() {
  const [words, setWords] = React.useState([]);

  const getRandomNumber = (from, before) => {
    return Math.round(Math.random(from, before) * 10);
  };

  const getNoun = () => {
    return nounsArr[getRandomNumber(1, 9)];
  };

  const getAdjective = () => {
    return adjectivesArr[getRandomNumber(1, 28)];
  };

  const generateWords = () => {
    return getAdjective() + ' ' + getAdjective() + ' ' + getNoun();
  };

  const getWords = () => {
    let word = generateWords();
    setWords([...words, word]);
  };

  const deleteWords = () => {
    setWords([]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {words.length === 0 ? <EmptyBlock /> : <List words={words} />}
        <button onClick={getWords} className="btn btn_generate">
          Сгенерировать
        </button>
        <button onClick={deleteWords} className="btn btn_clear">
          Очистить
        </button>
      </div>
    </div>
  );
}

export default App;
