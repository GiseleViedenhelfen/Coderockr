import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/context';
import './Style.css';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  return (
    <div className="card-container">
      {dataAPI && dataAPI.map((item) => (
        <Link
          key={item.id}
          to={`post/${item.id}`}
          className="card-link"
        >
          <div className="card-content">
            <img src={item.image} alt={item.title} />
            <div className="card-text-content">
              <p className="card-author-name">{item.author.name}</p>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-p-content">{item.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Cards;
