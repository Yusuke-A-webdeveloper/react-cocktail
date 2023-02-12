import styled from 'styled-components';
import { DefaultTitle } from '../components/Title';
import errorImg from '../images/error.svg';

const Error = () => {
  return (
    <Wrapper>
      <DefaultTitle>
        <h2>
          <span>E</span>rror
        </h2>
      </DefaultTitle>
      <article>
        <div className="img-con">
          <img src={errorImg} alt="error" />
        </div>
        <h3>page not found</h3>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin-top: 10px;
  article {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .img-con {
      position: relative;
      width: 450px;
      height: 450px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    h3 {
      color: var(--main);
      text-transform: capitalize;
      font-size: 30px;
      margin-top: 20px;
    }
  }
`;

export default Error;
