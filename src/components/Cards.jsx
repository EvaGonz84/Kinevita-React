import { Card } from "./Card";
import styled from "styled-components";
import image from "../assets/Portada.jpg";

const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1rem auto;
  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

const StyledDiv = styled.div`
   width: 22%;
    @media screen and (max-width: 968px) {
    width: 80%;
  }
`;

const services = [
  {
    id: 1,
    service: "Fisioterapia a domicilio",
    img: image,
  },

  {
    id: 2,
    service: "Pilates y ejercicio terapéutico",
    img: image,
  },

  {
    id: 3,
    service: "Gimnasia Hipopresiva",
    img: image,
  },
];

const Cards = () => {
  return (
    <>
      <CardsContainer>
        {services.map((item) => {
          return (
            <StyledDiv key={item.id}>
              <Card title={item.service} image={item.img} />
              </StyledDiv>
          );
        })}
      </CardsContainer>
    </>
  );
};

export { Cards };
