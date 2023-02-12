import styled from 'styled-components';
import Cocktails from '../components/Cocktails';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <Wrapper>
      <SearchForm />
      <Cocktails />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Home;
