import styled from "styled-components";
import { PricesCard } from "../components/PricesCard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  background-color: #fbf9f9;

  h2 {
    text-transform: uppercase;
    font-size: 1.75rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

const Prices = () => {
  return (
    <>
      <Container>
        <h2>Fisioterapia Kinevita</h2>
        <h3>Precios fisioterapia en Barcelona y alrededores</h3>

        <p>
          Fisioterapia y rehabilitación a domicilio, drenaje linfático manual.
          Sesiones privadas de 50 minutos.
        </p>
        <PricesCard />

        <p>
          Sesiones de pilates, gimnasia abdominal hipopresiva, gimnasia para
          mayores. Sesiones y clases privadas de 50 minutos.
        </p>
        <PricesCard />
      </Container>
    </>
  );
};

export { Prices };
