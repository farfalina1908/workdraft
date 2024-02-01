import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 321px) and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  border-radius: 5px;
  padding: 0px 10px;
  height: 45px;
  cursor: pointer;
  border: 1px solid #fff;
  background-color: #4497a9;
  font-weight: 700;

  &:hover {
    background-color: #fff;
  }

  @media screen and (max-width: 320px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 321px) and (max-width: 768px) {
    margin-left: 10px;
    height: 35px;
  }
`;

export const WelcomeText = styled.p`
  color: #fff;
  font-weight: 700;

  @media screen and (max-width: 320px) {
    font-size: 18px;
  }

  @media screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 24px;
  }
`;
