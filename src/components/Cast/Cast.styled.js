import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 185px);
  gap: 45px;
  justify-content: center;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;
