import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    border: 1px solid #fff;
    background-color: #4497a9;
  }

  /* Styles for screen width 320px */
  @media screen and (max-width: 320px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  /* Styles for screen width 768px */
  @media screen and (min-width: 321px) and (max-width: 768px) {
    padding: 10px 18px;
    font-size: 16px;
  }
`;
