import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useState } from "react";
import * as colors from "../styles/colors";

const FormContainer = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  padding: 2rem 4rem;
  background-color: ${colors.BACKGROUND2};
  box-sizing: border-box;

  p {
    text-align: center;
  }

  @media screen and (max-width: 968px) {
    max-width: 95%;
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
  margin: 0.5rem 0;
  display: flex;
  @media screen and (max-width: 968px) {
    text-align: start;
  }
`;

const StyledInputDiv = styled.div`
  padding-top: 0.1rem;
`;

const ContactButton = styled(StyledButton)`
  margin: 0;
`;

const StyledSpan = styled.span`
  margin-left: 0.2rem;
`;

const ContactForm = () => {
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
    <FormContainer>
      <FormTitle>formulario de contacto</FormTitle>
      <p>
        Rellena el siguiente formulario con tus peticiones, dudas o sugerencias.
      </p>
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
          <StyledInputDiv>
            <input type="checkbox" />
          </StyledInputDiv>
          <StyledSpan>Acepto términos y condiciones</StyledSpan>
        </StyledDiv>

        <StyledDiv>
          <ContactButton
            color="#e9682d"
            borderhover="1px solid black"
            type="submit"
          >
            Enviar
          </ContactButton>
        </StyledDiv>
      </Form>
    </FormContainer>
  );
};

export { ContactForm };
