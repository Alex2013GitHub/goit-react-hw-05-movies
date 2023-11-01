import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #191d1e;
  font-weight: 600;
  font-size: 16px;
  margin-right: 10px;
  width: 450px;

  outline: none;

  &:hover {
    color: blue;
    border: 2px solid blue;
    transition-delay: 0.25s;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    color: blue;
    border: 2px solid blue;
    transition-delay: 0.25s;
  }
`;
