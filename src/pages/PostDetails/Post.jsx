import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestApiById } from '../../helpers/api';

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
      {infoPost.length > 0 && infoPost.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} height="100px" />
          <p>{item.createdAt}</p>
          <h3>{item.author.name}</h3>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      )) }
    </div>
  );
}
export default PostDetails;
