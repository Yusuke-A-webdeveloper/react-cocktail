import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import { NoDrinksTitle } from './Title';
import Singlecocktail from './Singlecocktail';
import { DefaultTitle } from './Title';

const Cocktails = () => {
  const { cocktail, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktail.length === 0) {
    return (
      <NoDrinksTitle>
        <h2>
          <span>T</span>here is no cocktail matched
        </h2>
      </NoDrinksTitle>
    );
  }

  return (
    <Wrapper>
      <DefaultTitle>
        <h2>
          <span>C</span>ocktail list
        </h2>
      </DefaultTitle>
      <div className="cocktail-con">
        {cocktail.map((item) => {
          return <Singlecocktail {...item} key={item.idDrink} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  .cocktail-con {
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default Cocktails;
