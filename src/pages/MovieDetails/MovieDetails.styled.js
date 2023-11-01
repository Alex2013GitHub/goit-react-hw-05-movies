import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;

  &:hover {
    color: blue;
    transition-delay: 0.25s;
  }
`;

export const Button = styled.button`
  padding: 8px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #191d1e;
  color: #191d1e;
  font-weight: 450;
  font-size: 16px;

  &:hover {
    color: blue;
    border: 2px solid blue;
    transition-delay: 0.25s;
  }
`;
