import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 185px);
  gap: 16px;
  justify-content: center;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;
