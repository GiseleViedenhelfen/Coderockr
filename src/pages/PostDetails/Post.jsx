import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestApiById } from '../../helpers/api';
import Header from '../../components/Header/Header';
import './Style.css';

function PostDetails() {
  const [infoPost, setInfoPost] = useState([]);
  const params = useParams('/post/:id');
  const { id } = params;
  useEffect(() => {
    const API = async () => {
      const api = await requestApiById(id);
      setInfoPost([api]);
    };
    API();
  }, []);

  return (
    <div>
      <Header />
      <div className="background-post">
        {infoPost.length > 0 && infoPost.map((item) => (
          <div key={item.id} className="post-container">
            <div className="post-content-container">
              <img src={item.image} alt={item.title} height="100px" />
              <div className="post-content-infos">
                <p>{item.createdAt}</p>
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
