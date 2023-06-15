import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { ContactForm } from "../components/ContactForm";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  background-color: #fbf9f9;

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

const Contact = () => {
  return (
    <Container>
      <h1>Fisioterapia a domicilio Kinevita</h1>
      <h2>Pide cita con un fisioterapeuta en Barcelona</h2>

      <p>
        Puedes pedir una cita directamente escribiéndonos un mensaje o
        rellenándo el formulario para cualquier duda o consulta.
      </p>
      <StyledButton color="#e9682d" borderhover="1px solid black">
        Escribir ahora
      </StyledButton>

      <ContactForm />
    </Container>
  );
};

export { Contact };
