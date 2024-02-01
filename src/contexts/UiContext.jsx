import { createContext } from 'react';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const uiContext = createContext();

export const UiContext = ({ children }) => {
  const [perRow, setPerRow] = useLocalStorage('perRow', '2');
  const [itemsPerRow, setItemsPerRow] = useState('2');

  useEffect(() => {
    setItemsPerRow(perRow);
  }, [perRow]);
  return (
    <uiContext.Provider value={{ itemsPerRow, setItemsPerRow }}>
      {children}
    </uiContext.Provider>
  );
};
