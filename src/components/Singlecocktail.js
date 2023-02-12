import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Singlecocktail = ({
  idDrink: id,
  strDrink: name,
  strDrinkThumb: img,
  strCategory: category,
}) => {
  return (
    <Wrapper>
      <article className="single-cocktail">
        <div className="img-con">
          <img src={img} alt={name} />
        </div>
        <footer>
          <h3>{name}</h3>
          <h4>{category}</h4>
          <Link to={`cocktail/${id}`}>see detail</Link>
        </footer>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  .single-cocktail {
    position: relative;
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 10px;
    transition: 0.3s ease-out;
    &:hover {
      transform: scale(1.1);
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    .img-con {
      position: relative;
      width: 100%;
      height: 250px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    footer {
      text-align: center;
      margin: 10px 0;
      h3 {
        font-size: 30px;
        color: var(--header);
      }
      h4 {
        font-size: 18px;
        color: var(--header);
      }
      a {
        display: inline-block;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 4px 15px;
        margin-top: 10px;
        color: var(--header);
        border: 1px solid;
        transition: 0.3s ease-out;
        &:hover {
          background: var(--header);
          color: var(--white);
        }
      }
    }
  }
`;

export default Singlecocktail;
