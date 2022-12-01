import React, { useContext, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import GlobalContext from '../../context/context';
import { requestApi } from '../../helpers/api';

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
      <Cards />
    </div>
  );
}
export default Home;
