import styled from 'styled-components';

export const FilterWrpper = styled.div`
  display: flex;
  align-content: flex-end;
  gap: 20px;
  width: 400px;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const FilterInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;
