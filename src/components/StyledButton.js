import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.25em;
  border: ${(props) => props.border || "1px solid white"};
  border-radius: 3px;
  background: ${(props) => props.color || "transparent"};
  color: #ffff;
  margin: 24px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.background || "white"};
    color: ${(props) => props.hover || "black"};
    transition: all 0.5s ease;
    border: ${(props) => props.borderhover || "1px solid white"};
  }

  @media screen and (max-width: 968px) {
    margin: 5px;
  }
`;
