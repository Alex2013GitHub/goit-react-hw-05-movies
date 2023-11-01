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
  font-size: 18px;
  margin-bottom: 10px;
`;
// export const Item = styled.li`
//   height: 278px;
//   border-radius: 4px;
//   overflow: hidden;
//   box-shadow: 1px 3px 3px 1px #7a7a7a;

//   :hover {
//     transform: scale(1.025);
//   }
// `;
