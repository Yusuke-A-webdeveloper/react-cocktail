import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import { NoDrinksTitle } from '../components/Title';

const Detail = () => {
  const { singleCocktail, fetchSingleCocktail, loading } = useGlobalContext();
  const { cocktailId } = useParams();

  useEffect(() => {
    fetchSingleCocktail(cocktailId);
    // eslint-disable-next-line
  }, [cocktailId]);

  if (loading) {
    return <Loading />;
  }
  // checking to see if signleCocktail exists is a must, otherwise, it won't fail to fetch the data
  if (!singleCocktail) {
    return (
      <NoDrinksTitle>
        <h2>
          <span>T</span>here is no cocktail to display
        </h2>
      </NoDrinksTitle>
    );
  }

  const {
    strCategory: category,
    strDrink: name,
    strDrinkThumb: img,
    strInstructions: info,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = singleCocktail;

  const ingredient = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return (
    <Wrapper>
      <div className="img-con">
        <img src={img} alt={name} />
      </div>
      <article>
        <h2>
          <span>name</span>
          {name}
        </h2>
        <h4>
          <span>category</span>
          {category}
        </h4>
        <h4>
          <span>info</span>
          {alcoholic}
        </h4>
        <h4>
          <span>glass</span>
          {glass}
        </h4>
        <ul>
          <h2>
            <span>ingredient</span>
          </h2>
          {ingredient.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <p>{info}</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  max-width: 1000px;
  margin: 100px auto 0;
  display: flex;
  align-items: center;
  .img-con {
    position: relative;
    width: 50%;
    height: 350px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    position: relative;
    width: 50%;
    padding: 20px;
    h2 {
      font-size: 40px;
      color: var(--header);
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    span {
      background: var(--black);
      color: var(--white);
      font-size: 15px;
      padding: 3px 10px;
      margin-right: 10px;
    }
    h4 {
      font-size: 22px;
      color: var(--header);
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    p {
      margin-top: 20px;
      font-size: 18px;
    }
    ul {
      margin-top: 30px;
    }
    li {
      list-style: none;
      color: var(--header);
      font-size: 20px;
    }
  }
  @media (max-width: 415px) {
    margin: 50px auto 0;
    flex-direction: column;
    .img-con {
      width: 100%;
      height: 250px;
    }
    article {
      width: 100%;
    }
  }
`;

export default Detail;
