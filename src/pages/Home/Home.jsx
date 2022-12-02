import React, { useContext, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import GlobalContext from '../../context/context';
import { requestApi } from '../../helpers/api';
import './Style.css';

function Home() {
  const { setDataAPI } = useContext(GlobalContext);
  useEffect(() => {
    const API = async () => {
      const api = await requestApi();
      setDataAPI(api);
    };
    API();
  }, []);
  return (
    <div>
      <Header />
      <div className="all-cards-container">
        <Cards />
      </div>
    </div>
  );
}
export default Home;
