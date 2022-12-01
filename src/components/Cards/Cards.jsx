import React, { useContext } from 'react';
import GlobalContext from '../../context/context';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);

  return (
    <div>
      {dataAPI && dataAPI.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} height="100px" />
          <p>{item.author.name}</p>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
      <p>cards</p>
    </div>
  );
}
export default Cards;
