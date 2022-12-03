import React, {
  useContext, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/context';
import './Style.css';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  const [cardsOnload, setCardsOnload] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (dataAPI.length > 0) {
      const totalPages = Math.ceil(dataAPI.length / 3);
      if (currentPage === 2) {
        setCardsOnload(dataAPI.slice(0, 3));
      }
      if (currentPage <= totalPages && cardsOnload.length > 0) {
        const postsOnView = cardsOnload.length;
        const nextCardsToLoad = dataAPI.slice(postsOnView, postsOnView + 3);
        setCardsOnload([...cardsOnload, ...nextCardsToLoad]);
      }
    }
  }, [dataAPI, currentPage]);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector('#scroll'));
    return () => intersectionObserver.disconnect();
  }, []);
  return (
    <div className="card-container">
      {dataAPI.length > 0 && cardsOnload?.map((item) => (
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
      <span id="scroll" />
    </div>
  );
}
export default Cards;
