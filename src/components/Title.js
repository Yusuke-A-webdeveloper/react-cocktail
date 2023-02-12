import styled from 'styled-components';

export const DefaultTitle = styled.div`
  text-align: center;
  h2 {
    color: var(--header);
    font-size: 45px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span {
    font-size: 70px;
    color: var(--main);
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 30px;
    }
    span {
      font-size: 50px;
    }
  }
`;

export const NoDrinksTitle = styled(DefaultTitle)`
  margin-top: 100px;
  h2 {
    font-size: 30px;
  }
  span {
    font-size: 45px;
  }
`;
