import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/context';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div>
      {dataAPI && dataAPI.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} height="100px" />
          <p>{item.author.name}</p>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <button
            type="button"
            onClick={() => navigate(`post/${item.id}`)}
          >
            mais informações
          </button>
        </div>
      ))}
    </div>
  );
}
export default Cards;
