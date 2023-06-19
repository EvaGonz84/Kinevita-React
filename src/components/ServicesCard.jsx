import img2 from "../assets/Servicio2.jpg";
import img1 from "../assets/Servicio1.jpg";
import img3 from "../assets/Servicio3.jpg";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import * as colors from "../styles/colors";

const Container = styled.article`
  display: flex;
  width: 80%;
  gap: 20px;
  background-color: ${colors.BACKGROUND2};
  margin: 20px 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    gap: 10px;
    width: 90%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0.5rem;
  h1 {
    margin: 0;
  }
  @media screen and (max-width: 968px) {
  }
`;

const StyledImg = styled.img`
  @media screen and (max-width: 968px) {
  }
`;

const ServicesButton = styled(StyledButton)`
  margin: 0 auto 0 0;
  @media screen and (max-width: 968px) {
    margin: 0 auto;
  }
`;

const servicesCard = [
  {
    id: 1,
    title: "Fisioterapia y rehabilitación a domicilio",
    description:
      "¿Buscas servicios de fisioterapia y rehabilitación a domicilio con especialistas altamente capacitados? En cada sesión, nuestros especialistas en fisioterapia evaluarán tu condición individualmente y diseñarán un plan de tratamiento personalizado. Ofrecemos tratamientos de lesiones deportivas, problemas crónicos de espalda y otras condiciones, asegurando resultados óptimos.",
    image: img2,
  },
  {
    id: 2,
    title: "Pilates y ejercicio terapéutico",
    description:
      "El pilates, conocido por sus beneficios para fortalecer el cuerpo y mejorar la postura, es una práctica de ejercicio terapéutico ideal para personas de todas las edades y niveles de condición física. Con nuestras sesiones personalizadas, te guiaremos para que logres una alineación corporal óptima, fortalezcas tu musculatura profunda y mejores la concentración y el bienestar en tu día a día.",
    image: img1,
  },
  {
    id: 3,
    title: "Gimnasia Abdominal Hipopresiva",
    description:
      "La Gimnasia Abdominal Hipopresiva es una técnica revolucionaria que combina ejercicios posturales y respiratorios para fortalecer el suelo pélvico y tonificar la musculatura abdominal profunda. Con nuestras sesiones personalizadas, experimentarás una reducción notable de la cintura, mejora de la postura y de los dolores de espalda y ayudarás a la prevención de problemas relacionados con el suelo pélvico.",
    image: img3,
  },
];

const ServicesCard = () => {
  return (
    <>
      {servicesCard.map((service) => {
        return (
          <Container key={service.id}>
            <StyledImg src={service.image} />
            <Content>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <ServicesButton
                color={colors.ORANGE}
                borderhover="1px solid black"
              >
                Reservar
              </ServicesButton>
            </Content>
          </Container>
        );
      })}
    </>
  );
};

export { ServicesCard };
