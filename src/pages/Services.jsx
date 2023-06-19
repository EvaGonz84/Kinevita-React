import styled from "styled-components";
import * as colors from "../styles/colors";
import { ServicesCard } from "../components/ServicesCard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.BACKGROUND};

  h1 {
    text-transform: uppercase;
    font-size: 1.75rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 968px) {
    text-align: center;
  }
`;

const Services = () => {
  return (
    <Container>
      <h1>fisioterapia a domicilio kinevita</h1>
      <h2>
        Nuestros servicios a domicilio en Barcelona con tu Fisioterapeuta de
        confianza
      </h2>
      <p>
        Te ofrecemos los siguientes servicios de manera personalizada y de
        calidad en Barcelona
      </p>
      <ServicesCard />
    </Container>
  );
};
export { Services };
