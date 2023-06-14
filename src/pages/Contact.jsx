import styled from "styled-components";
import { StyledButton } from "../components/StyledButton";
import { useState } from "react";

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

const FormContainer = styled.div`
  width: 500px;
  margin: 2rem auto;
  padding: 2rem 4rem;
  background-color: #f3efed;
  
  p {
    text-align: center;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  @media screen and (max-width: 968px) {
    text-align: start;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  resize: none;
`;

const StyledDiv = styled.div`
margin-top:0.5rem;
@media screen and (max-width: 968px) {
    text-align: start;
  }
`;

const ContactButton = styled(StyledButton)`
margin: 0;
`;



const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar el envío de los datos del formulario
    console.log(formData);
  };
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

      {/* form */}
      <FormContainer>
        <FormTitle>formulario de contacto</FormTitle>
        <p>Rellena el siguiente formulario con tus peticiones, dudas o sugerencias.</p>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputLabel htmlFor="firstName">Nombre</InputLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="lastName">Apellidos</InputLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="comment">Escribe un comentario</InputLabel>
            <TextArea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <StyledDiv>
          <ContactButton color="#e9682d"  borderhover="1px solid black" type="submit">Enviar</ContactButton>
          </StyledDiv>
        </Form>
      </FormContainer>
    </Container>
  );
};

export { Contact };
