import styled from "styled-components";
import background from "../assets/Portada.jpg";
import { StyledButton } from "../components/StyledButton";
import { Cards } from "../components/Cards";

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
  line-height: 2em;

  h1 {
    font-size: 3.2rem;
    line-height: 1em;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    @media screen and (max-width: 968px) {
      width: 80%;
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f3efed;


  h2 {
    font-size: 3rem;
    font-weight: lighter;
    @media screen and (max-width: 968px) {
      font-size: 2rem;
  }
  }

  h4 {
    font-size: 2rem;
    font-weight: lighter;
    @media screen and (max-width: 968px) {
      font-size: 1rem;
     
  }
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <h1>Fisioterapia a domicilio en Barcelona</h1>
        <p>
          Expertos en Fisioterapia y Rehabilitación a domicilio en Barcelona y
          alrededores.
        </p>
        <ButtonContainer>
          <StyledButton>Reservar cita</StyledButton>
          <StyledButton color="black" border="none">
            Contáctanos
          </StyledButton>
        </ButtonContainer>
      </Container>
      <StyledSection>
        <h2>Nuestros servicios</h2>
        <h3>Ofrecemos sesiones de Fisioterapia y clases totalmente personalizadas desde tu
          hogar
        </h3>
      </StyledSection>
      <Cards />
    </>
  );
};
export { Home };
