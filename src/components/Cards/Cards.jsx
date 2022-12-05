import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/context';
import './Style.css';
import seta from '../../icons/Vector.png';

function Cards() {
  const { dataAPI } = useContext(GlobalContext);
  const [bloco2, setBloco2] = useState(false);
  const [bloco3, setBloco3] = useState(false);
  const [bloco4, setBloco4] = useState(false);

  const isCardVisible = () => {
    const elem = document.querySelector('.bloco-um')?.getBoundingClientRect().bottom;
    const elem2 = document.querySelector('.bloco-dois')?.getBoundingClientRect().bottom;
    const elem3 = document.querySelector('.bloco-tres')?.getBoundingClientRect().bottom;
    const checkview = window.innerHeight;
    if (elem < checkview) {
      setBloco2(true);
    }
    if (elem2 < checkview) {
      setBloco3(true);
    }
    if (elem3 < checkview) {
      setBloco4(true);
    }
  };
  window.addEventListener('scroll', isCardVisible);
  const loopImg = (arr) => {
    const saveARR = arr;
    const fragNumber = [];
    while (saveARR.length > 0) {
      fragNumber.push(saveARR[saveARR.length - 1]);
      saveARR.pop();
    }
    const getFragNumber = fragNumber.reverse().map((number, index) => (
      number + index
    ));
    return getFragNumber;
  };
  const loopText = (arr) => {
    const saveARR = arr;
    const fragNumber = [];
    while (saveARR.length > 0) {
      fragNumber.push(saveARR[saveARR.length - 1]);
      saveARR.pop();
    }
    const getFragNumber = fragNumber.reverse().map((number, index) => (
      number + index + 1
    ));
    return getFragNumber;
  };
  const testArray = loopText([2, 3, 4]);
  const testArrayImg = loopImg([2, 3, 4]);
  const saveLoopText = loopText([2, 3, 4, 5, 6]);
  const secondTextLoop = loopText([2, 3, 4, 5, 6]);
  const terceiroLoopText = loopText([2, 3, 4, 5, 6]);
  const saveLoopImage = loopImg([2, 3, 4, 5, 6]);
  const secondLoop = loopImg([2, 3, 4, 5, 6]);
  const terceiroLoop = loopImg([2, 3, 4, 5, 6]);

  const setFragNumber = (obj, arrFrags) => {
    const saveARR = arrFrags;
    const preserveValue = saveARR[0];
    saveARR.shift();
    return (
      <Link
        key={obj.id}
        to={`/post/${obj.id}`}
        className={`frag${preserveValue}`}
      >
        <img
          src={obj.image}
          alt="imagem"
          style={{ width: '100%', height: '100%' }}
        />
      </Link>
    );
  };
  const setTextFrags = (obj, arrFrags) => {
    const saveARR = arrFrags;
    const preserveValue = saveARR[0];
    saveARR.shift();
    return (
      <Link key={obj.id} to={`/post/${obj.id}`} className={`frag${preserveValue}`}>
        <div className="text-content" width="100%">
          <p>{obj.author.name}</p>
          <h2>{obj.title}</h2>
          <div className="container-p-arrow">
            <p className="card-p-content">{obj.content}</p>
            <img src={seta} alt={seta} width="4%" height="20%" />
          </div>
        </div>
      </Link>

    );
  };

  return (
    <div className="card-container">
      <div className="bloco-um">
        {dataAPI.length > 0
        && (
          dataAPI.slice(0, 6).map((item, index) => (
            index === 0
              ? (
                <Link key={item.id} to={`/post/${item.id}`}>
                  <img
                    className={`frag${index}`}
                    src={item.image}
                    alt="imagem"
                    style={{ width: '100%', height: '100%' }}
                  />
                </Link>
              )
              : setFragNumber(item, saveLoopImage)
          ))
        )}
        {dataAPI.length > 0 && dataAPI.slice(0, 6).map((item, index) => (
          index === 0
            ? (
              <Link key={item.id} to={`/post/${item.id}`} className={`frag${index + 1}`}>
                <div className="text-content">
                  <p>{item.author.name}</p>
                  <h2>{item.title}</h2>
                  <div className="container-p-arrow">
                    <p className="card-p-content">{item.content}</p>
                    <img src={seta} alt={seta} width="4%" height="20%" />
                  </div>
                </div>
              </Link>
            )
            : setTextFrags(item, saveLoopText)
        ))}

      </div>
      {bloco2
      && (
      <div className="bloco-dois">
        {dataAPI.length > 0
        && (
          dataAPI.slice(6, 12).map((item, index) => (
            index === 0
              ? (
                <Link key={item.id} to={`/post/${item.id}`}>
                  <img
                    className={`frag${index}`}
                    src={item.image}
                    alt="imagem"
                    style={{ width: '100%', height: '100%' }}
                  />
                </Link>
              )
              : setFragNumber(item, secondLoop)
          ))
        )}
        {dataAPI.length > 0 && dataAPI.slice(6, 12).map((item, index) => (
          index === 0
            ? (
              <Link key={item.id} to={`/post/${item.id}`} className={`frag${index + 1}`}>
                <div className="text-content">
                  <p>{item.author.name}</p>
                  <h2>{item.title}</h2>
                  <div className="container-p-arrow">
                    <p className="card-p-content">{item.content}</p>
                    <img src={seta} alt={seta} width="4%" height="20%" />
                  </div>
                </div>
              </Link>
            )
            : setTextFrags(item, secondTextLoop)
        ))}
      </div>
      )}
      {bloco3
      && (
      <div className="bloco-tres">
        {dataAPI.length > 0
        && (
          dataAPI.slice(12, 18).map((item, index) => (
            index === 0
              ? (
                <Link key={item.id} to={`/post/${item.id}`}>
                  <Link key={item.id} to={`/post/${item.id}`}>
                    <img
                      className={`frag${index}`}
                      src={item.image}
                      alt="imagem"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Link>
                </Link>
              )
              : setFragNumber(item, terceiroLoop)
          ))
        )}
        {dataAPI.length > 0 && dataAPI.slice(12, 18).map((item, index) => (
          index === 0
            ? (
              <Link key={item.id} to={`/post/${item.id}`} className={`frag${index + 1}`}>
                <div className="text-content">
                  <p>{item.author.name}</p>
                  <h2>{item.title}</h2>
                  <div className="container-p-arrow">
                    <p className="card-p-content">{item.content}</p>
                    <img src={seta} alt={seta} width="4%" height="20%" />
                  </div>
                </div>
              </Link>
            )
            : setTextFrags(item, terceiroLoopText)
        ))}
      </div>
      )}
      {bloco4
      && (
        <div className="bloco-quatro">
          {dataAPI.length > 0
        && (
          dataAPI.slice(19, 23).map((item, index) => (
            index === 0
              ? (
                <Link key={item.id} to={`/post/${item.id}`}>
                  <img
                    className={`frag${index}`}
                    src={item.image}
                    alt="imagem"
                    style={{ width: '100%', height: '100%' }}
                  />
                </Link>
              )
              : setFragNumber(item, testArrayImg)
          ))
        )}
          {dataAPI.length > 0 && dataAPI.slice(19, 23).map((item, index) => (
            index === 0
              ? (
                <div className={`frag${index + 1}`} key={item.id}>
                  <div className="text-content">
                    <p>{item.author.name}</p>
                    <h2>{item.title}</h2>
                    <div className="container-p-arrow">
                      <p className="card-p-content">{item.content}</p>
                      <img src={seta} alt={seta} width="4%" height="20%" />
                    </div>
                  </div>
                </div>
              )
              : setTextFrags(item, testArray)
          ))}
        </div>
      )}
    </div>
  );
}
export default Cards;
