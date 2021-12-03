import React from 'react'
import { Avatar } from '@material-ui/core';

export default function List({fullName, text}) {

    return (
      <div className = 'txt'>
          {/* Тут не знаю как мне подвинуть элемент. Аватар вплонтую к тексту */}
        <img src="https://autogear.ru/misc/i/gallery/19307/2537818.jpg" />
        <p><b>{fullName}</b></p>
        <p>{text}</p>
      </div>
    );
}
