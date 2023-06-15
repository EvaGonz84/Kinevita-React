import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e9e1de;
  margin: 1rem;
  

  h4 {
    text-transform: uppercase;
    width:90%;
  };

  p {
   width: 90%;

    @media screen and (max-width: 968px) {
    
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

const Card = ({ title, image, description }) => {
  return (
    <>
      <CardContainer>
        <CardImage src={image} />
        <h4>{title}</h4>
        <p>{description}</p>
        <CardButton borderhover='1px solid black' color="black">Más info</CardButton>
      </CardContainer>
    </>
  );
};

export { Card };
