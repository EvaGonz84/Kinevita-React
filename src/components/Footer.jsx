import styled from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import background from "../assets/Portada.jpg";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-size: cover;
  background-position: center;
  padding: 1rem 0;
  color: white;
  letter-spacing: 0.02rem;

  h2 {
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
    @media screen and (max-width: 968px) {
      font-size: 1.4rem;
    }
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  align-content: center;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;

  h3 {
    font-size: 1.6rem;
    font-weight: lighter;
    @media screen and (max-width: 968px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

const ListContainer = styled.ul`
  padding: 0;
  line-height: 1.4rem;
  li {
    list-style: none;
  }
`;

const ContactContainer = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  li {
    list-style: none;
  }
`;

const StyledLink = styled.a`
  color: white;
  font-size: 1.6rem;
  fill: #25d366;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <h2>Fisioterapia Kinevita</h2>
      <Content>
        <div>
          <h3>Servicios</h3>
          <ListContainer>
            <li>Fisioterapia a domicilio</li>
            <li>Pilates y ejercicio terapéutico</li>
            <li>Gimnasia Abdominal Hipopresiva</li>
          </ListContainer>
        </div>
        <div>
          <h3>Contactos</h3>
          <ContactContainer>
            <li>
              <StyledLink href="#">
                <FaWhatsapp />
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#">
                <FaInstagram />
              </StyledLink>
            </li>
          </ContactContainer>
        </div>
      </Content>
      <section>
        <p>{`Copyright © Kinevita ${year}`}</p>
      </section>
    </Container>
  );
};

export { Footer };
