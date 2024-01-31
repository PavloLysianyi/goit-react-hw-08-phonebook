import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 15px;
  width: 400px;
  background-color: blue;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

export const FormButton = styled.button`
  padding: 8px 16px;
  color: white;
  background-color: blue;
  font-weight: 500;

  &:hover {
    background-color: green;
  }
`;
