import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  max-width: 100px;
  margin: 20px auto;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 7px 10px;
  cursor: pointer;
  border: 1px solid #fff;
  background-color: #4497a9;
  font-weight: 700;

  /* Styles for screen width 320px */
  @media screen and (max-width: 320px) {
    max-width: 80px;
    font-size: 14px;
    padding: 5px 10px;
  }

  /* Styles for screen width 768px */
  @media screen and (min-width: 321px) and (max-width: 768px) {
    max-width: 120px;
    font-size: 14px;
    padding: 5px 10px;
  }
`;

export const FormParagraph = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const AddContactWrapper = styled.section`
  width: auto;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: 19px 27px 67px 13px rgba(0, 0, 0, 0.57);
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
