import React from 'react';

export default function EmptyBlock() {
  return (
    <div className="block empty-block">
      <img
        src="https://img2.freepng.ru/20180324/ckw/kisspng-ghost-computer-icons-clip-art-scars-5ab5f4c58108b9.9216493115218741175285.jpg"
        width="32px"
        height="32px"
        alt="Ghost"
      />
      <h2>Список фраз пустой</h2>
      <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
    </div>
  );
}
