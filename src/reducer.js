const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'FETCH_DRINKS') {
    return {
      ...state,
      cocktail: action.payload,
      loading: false,
    };
  }
  if (action.type === 'NO_DRINKS') {
    return { ...state, cocktail: [], loading: false };
  }
  if (action.type === 'SEARCH_COCKTAIL') {
    return { ...state, searchTerm: action.payload };
  }
  if (action.type === 'SINGLE_COCKTAIL') {
    return { ...state, singleCocktail: action.payload, loading: false };
  }
  if (action.type === 'NO_SINGLECOCKTAIL') {
    return { ...state, singleCocktail: null, loading: false };
  }

  throw new Error('there is no such action type');
};

export default reducer;
