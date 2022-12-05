import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/context';
// import './Style.css';
import './teste.css';
import seta from '../../icons/Vector.png';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  const [pointer, setPointer] = useState([0, 6]);

  const FirstCardsToShow = (number) => {
    let result;
    if (dataAPI.length > 0) {
      const container = dataAPI.slice(...number);
      const mapContainer = container.map((card) => (
        <Link to={`/post/${card.id}`} className={` ${card.id} link${card.id}`}>
          <img src={card.image} alt={card.title} />
          <div className="card-text-container">
            <p>{card.author.name}</p>
            <h2>{card.title}</h2>
            <p className="card-p-content">{card.content}</p>
            <img src={seta} alt="img-seta" />
          </div>
        </Link>
      ));
      result = mapContainer;
    }
    return result;
  };
  const renderCardsByScroll = (arr) => {
    const getMainContainerDiv = document.querySelector('.cards-container');
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('bloco');
    if (dataAPI.length > 0) {
      const arrLink = [1, 2, 3, 4, 5, 6];
      const container = [...dataAPI.slice(...arr)];
      const getCards = container.map(
        (card) => {
          // criação das tags
          const cardLink = document.createElement('a');
          const textCardContainer = document.createElement('div');
          // const arrowContainer = document.createElement('div');
          const authorName = document.createElement('p');
          const content = document.createElement('p');
          const title = document.createElement('h2');
          const img = document.createElement('img');
          const arrow = document.createElement('img');
          // definição do conteudo de cada tag
          img.src = `${card.image}`;
          img.alt = `${card.title}`;
          arrow.src = seta;
          arrow.alt = 'img-seta';
          title.innerHTML = `${card.title}`;
          content.innerHTML = `${card.content}`;
          authorName.innerHTML = `${card.author.name}`;
          cardLink.href = `/post/${card.id}`;
          // atribuição de classes
          textCardContainer.classList.add('card-text-container');
          cardLink.classList.add(`${card.id}`);
          cardLink.classList.add(`link${arrLink[0]}`);
          content.classList.add('card-p-content');
          arrLink.shift();
          // filiação
          textCardContainer.appendChild(authorName);
          textCardContainer.appendChild(title);
          textCardContainer.appendChild(content);
          textCardContainer.appendChild(arrow);
          cardLink.appendChild(img);
          cardLink.appendChild(textCardContainer);
          groupContainer.appendChild(cardLink);
          return cardLink;
        },
      );
      // cria blocos de cards
      groupContainer.appendChild(...getCards);
      // adiciona cada bloco por scroll
      getMainContainerDiv.appendChild(groupContainer);
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
      const lastCard = document.getElementsByClassName(`${pointer[1]}`)[0]?.getBoundingClientRect().top;
      const screenSize = window.innerHeight;
      const getResult = lastCard < screenSize;
      helpScroll(getResult);
    }
  };
  return (
    <div className="cards-container">
      {window.addEventListener('scroll', timeToScroll)}
      <div className="bloco">
        {FirstCardsToShow([0, 6])}
      </div>
    </div>
  );
}
export default Cards;
