import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Wrapper>
      <div className="logo">
        <h1>cocktail</h1>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            about
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  background: var(--black);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  h1 {
    color: var(--header);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 40px;
  }
  ul {
    display: flex;
    gap: 20px;
  }
  li {
    list-style: none;
  }
  a {
    color: var(--white);
    text-decoration: none;
    font-size: 22px;
    text-transform: uppercase;
    transition: 0.3s ease-out;
    &:hover {
      color: var(--main);
    }
  }
  .active {
    color: var(--header);
  }
  @media (max-width: 415px) {
    justify-content: space-between;
    padding: 10px;
    h1 {
      font-size: 30px;
    }
    a {
      font-size: 20px;
    }
  }
`;

export default Nav;
