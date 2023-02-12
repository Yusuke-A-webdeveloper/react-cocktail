import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchCocktail } = useGlobalContext();
  const searchValue = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">search cocktail</label>
        <input
          type="text"
          ref={searchValue}
          onChange={() => searchCocktail(searchValue)}
        />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  form {
    max-width: 450px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 20px;
    background: var(--header);
    label {
      color: var(--white);
      text-transform: uppercase;
      font-size: 20px;
      letter-spacing: 1px;
    }
    input {
      margin-top: 10px;
      width: 100%;
      font-size: 18px;
      padding: 5px;
      border: none;
    }
  }
`;

export default SearchForm;
