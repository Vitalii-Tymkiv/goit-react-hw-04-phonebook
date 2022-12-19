import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  margin-left: 10px;
  padding: 8px;
  font-size: 18px;
  color: #212121;
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
`;

export const Btn = styled.button`
  margin-left: 10px;
  cursor: pointer;
  color: #7366ff;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgba(115, 102, 255, 0.15);
  transition: all 0.3s ease;
  border: none;
  text-align: center;

  &:hover {
    color: #fff;
    background-color: #7366ff;
  }
`;
