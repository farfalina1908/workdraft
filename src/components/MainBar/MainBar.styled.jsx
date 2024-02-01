import styled from 'styled-components';

export const Header = styled.header`
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  height: 50px;

  > nav {
    display: flex;
  }

  @media (max-width: 320px) {
    align-items: flex-start;
    justify-content: center;
    height: auto;

    > nav {
      margin-top: 8px;
    }
  }
`;

export const Container = styled.div`
  opacity: 1;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 320px) {
    padding: 0 8px;
    max-width: 100%;
  }
`;
