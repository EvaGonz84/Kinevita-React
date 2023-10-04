import styled, { css } from "styled-components";
import { useState } from "react";
import * as colors from "../styles/colors";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  max-width: 70%;
  margin: 2rem auto;
  padding: 2rem 4rem;
  background-color: ${colors.BACKGROUND2};
  box-sizing: border-box;

  p {
    text-align: center;
  }

  @media screen and (max-width: 968px) {
    max-width: 95%;
    padding: 2rem 1rem;
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

const ContactButton = styled.button`
  margin: 0;
  font-size: 1em;
  padding: 0.5em 1.25em;
  cursor: pointer;

  ${({ disabled }) =>
    !disabled &&
    css`
      background-color: #e9682d;
      color: white;
      border: 1px solid white;
      border-radius: 3px;

      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    `}
`;

const StyledSpan = styled.span`
  margin-left: 0.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
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

  const [isDisable, setIsDisable] = useState(false);

  const checkboxHandler = () => {
    setIsDisable(!isDisable);
  };
  const btnHandler = () => {
    alert("Agree");
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
            <input type="checkbox" onChange={checkboxHandler} />
          </StyledInputDiv>
          <StyledSpan>
            Acepto y confirmo la{" "}
            <StyledLink to="/privacidad">Política de Privacidad*</StyledLink>
          </StyledSpan>
        </StyledDiv>
        <StyledDiv>
          <StyledSpan>
            Política de Privacidad: Protegemos tus datos personales según la Ley
            34/2002 (LSSI-CE) y la LOPD/RGPD. Recopilamos tus datos (nombre y
            apellidos, correo, comentarios) sólo para brindarte el servicio de
            fisioterapia a domicilio. Almacenamos tus datos de forma segura y
            los conservamos el tiempo necesario. No compartimos tus datos con
            terceros sin tu consentimiento. Puedes ejercer tus derechos de
            acceso, rectificación, cancelación y oposición. La seguridad de tus
            datos es importante, aunque ninguna transmisión por internet es 100%
            segura. Nos reservamos el derecho de modificar la Política de
            Privacidad. Para más información, contáctanos en
            kinevita.es@gmail.com. Gracias por confiar en nosotros y proteger tu
            privacidad.
          </StyledSpan>
        </StyledDiv>

        <StyledDiv>
          <ContactButton
            color="#e9682d"
            borderhover="1px solid black"
            type="submit"
            disabled={!isDisable}
            onClick={btnHandler}
          >
            Enviar
          </ContactButton>
        </StyledDiv>
      </Form>
    </FormContainer>
  );
};

export { ContactForm };
