import styled from 'styled-components';

export const ContactItem = styled.li`
  width: 390px;
  margin: 10px auto;
`;

export const Name = styled.span`
  display: inline-block;
  width: 250px;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #e17c63;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #f51e10;
  }
`;
