import styled from 'styled-components';
import { DefaultTitle } from './Title';

const Loading = () => {
  return (
    <Wrapper>
      <DefaultTitle>
        <h2>
          <span>l</span>oading...
        </h2>
      </DefaultTitle>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
`;

export default Loading;
