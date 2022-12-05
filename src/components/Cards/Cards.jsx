import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/context';
import './Style.css';
// import seta from '../../icons/Vector.png';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  const [pointer, setPointer] = useState([0, 6]);

  const FirstCardsToShow = (number) => {
    let result;
    if (dataAPI.length > 0) {
      const container = dataAPI.slice(...number);
      const mapContainer = container.map((card, index) => (
        <Link to={`/post/${card.id}`} className={`card${index} ${card.id}`}>
          <img src={card.image} alt={card.title} width="20%" />
          <div className="card-text-container">
            <p>{card.author.name}</p>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </Link>
      ));
      result = mapContainer;
    }
    return result;
  };
  const renderCardsByScroll = (arr) => {
    const getMainContainerDiv = document.querySelector('.cards-container');
    if (dataAPI.length > 0) {
      const container = [...dataAPI.slice(...arr)];
      container.forEach(
        (card, index) => {
          // criação das tags
          const cardLink = document.createElement('a');
          const textCardContainer = document.createElement('div');
          const authorName = document.createElement('p');
          const content = document.createElement('p');
          const title = document.createElement('h2');
          const img = document.createElement('img');
          // definição do conteudo de cada tag
          img.src = `${card.image}`;
          img.alt = `${card.title}`;
          title.innerHTML = `${card.title}`;
          content.innerHTML = `${card.content}`;
          authorName.innerHTML = `${card.author.name}`;
          cardLink.href = `/post/${card.id}`;
          // atribuição de classes
          textCardContainer.classList.add('card-text-container');
          cardLink.classList.add(`card${index}`);
          cardLink.classList.add(`${card.id}`);
          // filiação
          textCardContainer.appendChild(authorName);
          textCardContainer.appendChild(title);
          textCardContainer.appendChild(content);
          cardLink.appendChild(img);
          cardLink.appendChild(textCardContainer);
          getMainContainerDiv.appendChild(cardLink);
        },
      );
    }
  };
  const helpScroll = (validation) => {
    if (validation) {
      const newPointer = pointer;
      newPointer.splice(0, 2, newPointer[0] + 6, newPointer[1] + 6);
      setPointer(newPointer);
      renderCardsByScroll(pointer);
    }
  };

  const timeToScroll = () => {
    if (dataAPI.length > 0) {
      const lastCard = document.getElementsByClassName(pointer[1])[0]?.getBoundingClientRect().top;
      const screenSize = window.innerHeight;
      const getResult = lastCard < screenSize;
      helpScroll(getResult);
    }
  };
  return (
    <div className="cards-container">
      {window.addEventListener('scroll', timeToScroll)}
      {FirstCardsToShow([0, 6])}
    </div>
  );
}
export default Cards;
