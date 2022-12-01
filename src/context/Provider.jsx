import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './context';

export default function GlobalProvider({ children }) {
  const [dataAPI, setDataAPI] = useState([]);
  const context = useMemo(() => ({
    dataAPI,
    setDataAPI,
  }), [dataAPI]);

  return (
    <GlobalContext.Provider value={context}>
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
