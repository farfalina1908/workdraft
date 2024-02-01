import styled from 'styled-components';

export const Label = styled.label`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 320px) {
    margin: 10px auto;
  }

  @media screen and (min-width: 321px) and (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const FilterParagraph = styled.p`
  margin-bottom: 15px;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 14px;
  }
`;
