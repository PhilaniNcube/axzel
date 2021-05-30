import styled from 'styled-components';

const Button = styled.button`
  padding: 1em 2.5em;
  font-size: 2.5em;
  text-transform: uppercase;
  background-color: var(--primary);
  color: #fff;
  margin-top: 1.8em;
  border: none;
  outline: none;
  transition: 0.2s;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 0.3em;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    opacity: 0.9;
  }
`;
export default Button;
