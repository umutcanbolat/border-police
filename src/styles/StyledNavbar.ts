import styled from 'styled-components';
import { MAIN_DARK } from './colors';

const StyledNavbar = styled.header`
  background: ${MAIN_DARK};

  .brand {
    display: flex;
    font-size: large;
    align-items: center;
    padding-left: 0;
  }
  .fork {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    font-weight: 600;
    text-align: center;
    padding: 20px 22px;
    text-decoration: none;
  }

  li a:after {
    display: block;
    content: '';
    border-bottom: 0.1rem;
    border-bottom-style: solid;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  li a:hover:after {
    transform: scaleX(1);
  }
  li a:after {
    transform-origin: 0% 100%;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  .pull-right {
    margin-left: auto;
  }
`;

export default StyledNavbar;
