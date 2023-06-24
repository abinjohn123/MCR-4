import { useState, createContext, useContext } from 'react';

import { forumData } from './src/Assets/Constants';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [data, setData] = useState(forumData);

  const contextValue = { data, setData };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
