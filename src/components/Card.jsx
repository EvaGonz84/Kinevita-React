import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid black;
  margin: 1rem;

  p {
    @media screen and (max-width: 968px) {
    width: 80%;
  }
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardButton = styled(StyledButton)`
  @media screen and (max-width: 968px) {
    margin: 1rem;
  }
`;

const Card = ({ title, image }) => {
  return (
    <>
      <CardContainer>
        <CardImage src={image} />
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <CardButton color="black">Más info</CardButton>
      </CardContainer>
    </>
  );
};

export { Card };
