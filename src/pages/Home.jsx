import styled from "styled-components";
import background from "../assets/Portada.jpg";
import { StyledButton } from "../components/StyledButton";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffff;

  h1 {
    font-size: 3rem;
  }

  p {
    line-height: 2em;
    font-size: 1.25rem;
    @media screen and (max-width: 968px) {
      width: 80%;
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <Container>
      <h1>Fisioterapia a domicilio en Barcelona</h1>
      <p>
        Expertos en Fisioterapia y Rehabilitación a domicilio en Barcelona y
        alrededores.
      </p>
      <ButtonContainer>
        <StyledButton primary>Reservar cita</StyledButton>
        <StyledButton inputColor='black'>Contáctanos</StyledButton>
      </ButtonContainer>
    </Container>
  );
};
export { Home };
