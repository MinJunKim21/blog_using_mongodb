import { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';
import LocalStorage from './LocalStorage';

const INITIAL_STATE = {
  user: JSON.parse(LocalStorage.getItem('user')) || null,
  fetching: false,
  error: false,
};
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    LocalStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
