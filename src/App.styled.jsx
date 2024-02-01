import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 1240px;
  height: 800px;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  // box-shadow: 19px 27px 67px 13px rgba(1, 1, 1, 1);
  // padding: 30px;
  // background-color: #4497a9;
  // &:not(:last-child) {
  //   margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 700px;
    height: auto;
    padding: 20px;
  }

  @media screen and (max-width: 420px) {
    max-width: 100%;
    height: 896px;
    padding: 10px;
    margin: 0;
  }
`;
