import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestApiById } from '../../helpers/api';
import Header from '../../components/Header/Header';
import './Style.css';

function PostDetails() {
  const [infoPost, setInfoPost] = useState([]);
  const [dataFormatada, setDataFormatada] = useState([]);
  const params = useParams('/post/:id');
  const { id } = params;
  const months = {
    '01': 'jan',
    '02': 'fev',
    '03': 'mar',
    '04': 'abr',
    '05': 'mai',
    '06': 'jun',
    '07': 'jul',
    '08': 'ago',
    '09': 'set',
    10: 'out',
    11: 'nov',
    12: 'dez',
  };
  useEffect(() => {
    const API = async () => {
      const api = await requestApiById(id);
      const getData = api.createdAt.slice(0, 10).split('-').reverse();
      const setMonth = Object.keys(months).find((key) => key === getData[1]);
      const findMonth = months[setMonth];
      const data = `${findMonth} ${getData[0]}, ${getData[2]}`;
      setDataFormatada(data);
      setInfoPost([api]);
    };
    API();
  }, []);

  return (
    <div>
      <Header />
      <div className="background-post" height="100%">
        {infoPost.length > 0 && infoPost.map((item) => (
          <div key={item.id} className="post-container">
            <div className="post-content-container">
              <img src={item.image} alt={item.title} />
              <div className="post-content-infos">
                <p>{dataFormatada}</p>
                <h3>{item.author.name}</h3>
                <h2>{item.title}</h2>
              </div>
            </div>
            <p className="post-p">{item.content}</p>
          </div>
        )) }
      </div>
    </div>
  );
}
export default PostDetails;
