import styled from "styled-components";
import { StyledButton } from "./StyledButton";


const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #e9e1de;
  padding: 2rem;


  h4 {
    text-transform: uppercase;
  }
`;


const CardsContainer = styled.article`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px auto 60px auto;


  @media screen and (max-width: 968px) {
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    gap: 20px;
  }
`;


const PricesCard = () => {
  return (
    <>
      <CardsContainer>
        <CardContainer>
          <h4>Sesiones sueltas</h4>
          <p>50€</p>
          <StyledButton color="#e9682d">Reservar</StyledButton>
        </CardContainer>
        <CardContainer>
          <h4>Bono 5 sesiones</h4>
          <p>200€</p>
          <StyledButton color="#e9682d">Reservar</StyledButton>
        </CardContainer>
        <CardContainer>
          <h4>Bono 10 sesiones</h4>
          <p>400€</p>
          <StyledButton color="#e9682d">Reservar</StyledButton>
        </CardContainer>
      </CardsContainer>
    </>
  );
};


export { PricesCard };