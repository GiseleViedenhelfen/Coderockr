import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/context';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  return (
    <div>
      {dataAPI && dataAPI.map((item) => (
        <Link key={item.id} to={`post/${item.id}`}>
          <div>
            <img src={item.image} alt={item.title} height="100px" />
            <p>{item.author.name}</p>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Cards;
