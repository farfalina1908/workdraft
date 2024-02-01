import styled from 'styled-components';

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 7px 10px;
  cursor: pointer;
  border: 1px solid #fff;
  background-color: #4497a9;
  font-weight: 700;

  @media screen and (max-width: 320px) {
    padding: 5px 5px;
    font-size: 12px;
  }
`;

export const Paragraph = styled.p`
  @media screen and (max-width: 768px) {
    margin: 5px 0px;
  }
`;

export const DataWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;
