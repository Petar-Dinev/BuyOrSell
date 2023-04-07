import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialValue;
  });

  const setLocalStorageState = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setState(newValue);
  };

  return [state, setLocalStorageState];
};
