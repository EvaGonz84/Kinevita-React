import styled from "styled-components";
import { PricesCard } from "../components/PricesCard";
import * as colors from '../styles/colors'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.BACKGROUND};

  h2 {
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

const prices = [
  {
    id: 1,
    description: "Sesiones sueltas",
    price: "50€",
  },
  {
    id: 2,
    description: "Bono 5 sesiones",
    price: "225€",
  },
  {
    id: 3,
    description: "Bono 10 sesiones",
    price: "475€",
  },
  {
    id: 4,
    description: "Sesiones sueltas",
    price: "45€",
  },
  {
    id: 5,
    description: "Bono 5 sesiones",
    price: "200€",
  },
  {
    id: 6,
    description: "Bono 10 sesiones",
    price: "425€",
  },
];

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
        <CardsContainer>
          {prices
            .filter((item) => item.id <= 3)
            .map((filteredPrice) => (
              <div key={filteredPrice.id}>
                <PricesCard
                  description={filteredPrice.description}
                  price={filteredPrice.price}
                />
              </div>
            ))}
        </CardsContainer>

        <p>
          Sesiones de pilates, gimnasia abdominal hipopresiva, gimnasia para
          mayores. Sesiones y clases privadas de 50 minutos.
        </p>
        <CardsContainer>
          {prices
            .filter((item) => item.id >= 4)
            .map((filteredPrice) => (
              <div key={filteredPrice.id}>
                <PricesCard
                  description={filteredPrice.description}
                  price={filteredPrice.price}
                />
              </div>
            ))}
        </CardsContainer>
      </Container>
    </>
  );
};

export { Prices };
