import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 20px;
  border-radius: 20px;
  border: none;

  &:hover,
  focus {
    outline: 1.5px solid black;
  }
  &:active {
    background-color: #cdcdcd;
  }
`;
