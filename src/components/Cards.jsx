import { Card } from "./Card";
import styled from "styled-components";
import image1 from "../assets/Servicio1.jpg";
import image2 from "../assets/Servicio2.jpg";
import image3 from "../assets/Servicio3.jpg";

const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem auto;
  background-color: #fbf9f9;
  
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
    service: "Fisioterapia y Rehabilitación a domicilio",
    description:
      "Ofrecemos un servicio de Fisioterapia y Rehabilitación a domicilio de calidad con una atención personalizada en la comodidad del hogar.",
    img: image2,
  },

  {
    id: 2,
    service: "Pilates y ejercicio terapéutico",
    description:
      "La práctica del Método Pilates nos ayuda a aliviar dolores de espalda, prevenir futuras lesiones, aportar vitalidad y energía al cuerpo y reducir el estrés y...",
    img: image1,
  },

  {
    id: 3,
    service: "Gimnasia Abdominal Hipopresiva",
    description:
      "La Gimnasia Abdominal Hipopresiva nos ayuda a tratar y prevenir diferentes tipos de lesiones. Gracias a la práctica regular de los hipopresivos conseguimos...",
    img: image3,
  },
];

const Cards = () => {
  return (
    <>
      <CardsContainer>
        {services.map((item) => {
          return (
            <StyledDiv key={item.id}>
              <Card title={item.service} image={item.img} description={item.description}/>
            </StyledDiv>
          );
        })}
      </CardsContainer>
    </>
  );
};

export { Cards };
