import React, { useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const urlWithId = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const initialState = {
  loading: false,
  searchTerm: 'a',
  cocktail: [],
  singleCocktail: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCocktail = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const resp = await fetch(`${url}${state.searchTerm}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        dispatch({ type: 'FETCH_DRINKS', payload: drinks });
      } else {
        dispatch({ type: 'NO_DRINKS' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchCocktail = (searchValue) => {
    const tempValue = searchValue.current.value;
    dispatch({ type: 'SEARCH_COCKTAIL', payload: tempValue });
  };

  const fetchSingleCocktail = async (id) => {
    dispatch({ type: 'LOADING' });
    try {
      const resp = await fetch(`${urlWithId}${id}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        dispatch({ type: 'SINGLE_COCKTAIL', payload: drinks[0] });
      } else {
        dispatch({ type: 'NO_SINGLECOCKTAIL' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCocktail();
    // eslint-disable-next-line
  }, [state.searchTerm]);

  return (
    <AppContext.Provider
      value={{ ...state, fetchSingleCocktail, searchCocktail }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
