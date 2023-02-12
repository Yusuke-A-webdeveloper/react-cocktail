import styled from 'styled-components';
import { DefaultTitle } from '../components/Title';

const About = () => {
  return (
    <Wrapper>
      <DefaultTitle>
        <h2>
          <span>a</span>bout cocktail
        </h2>
      </DefaultTitle>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae
          saepe ad, est cum dolor nulla sunt amet sapiente voluptatum minima
          sint? Accusamus voluptas dolor asperiores. Eaque accusamus iure
          doloribus odit maiores, ipsum deserunt consequuntur, cupiditate animi
          omnis dolore consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
          veniam, consequuntur id numquam vero molestiae quasi, odio quibusdam
          quam porro assumenda? Ipsam veritatis doloremque quia in corrupti,
          iure fugiat!
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin-top: 80px;
  .text {
    max-width: 800px;
    margin: 40px auto 0;
    padding: 0 20px;
  }
  p {
    margin-bottom: 10px;
  }
`;

export default About;
