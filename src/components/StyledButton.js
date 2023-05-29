import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.25em;
  border: ${(props) => (props.primary ? "1px solid white" : "none")};
  border-radius: 3px;
  background:  ${props => props.inputColor || "transparent"};
  color: #ffff;
  margin: 24px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "black" : "white")};
    color: ${(props) => (props.primary ? "white" : "black")};
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 968px) {
    margin: 5px;
  }
`;