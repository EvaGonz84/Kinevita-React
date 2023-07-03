import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  width: 90%;

  p {
    font-size: 1.25rem;
  }
`;
const Privacy = () => {
  return (
    <Container>
      <h1>Política de Privacidad - Servicio de Fisioterapia a Domicilio</h1>
      <p>
        Esta Política de Privacidad establece cómo se recopilan, utilizan,
        almacenan y protegen sus datos personales al utilizar nuestro servicio
        de fisioterapia a domicilio. Lea atentamente esta información antes de
        enviar cualquier formulario o proporcionar sus datos personales. Al
        acceder y utilizar nuestro servicio, usted acepta las prácticas
        descritas en esta Política de Privacidad.
      </p>
      <p>
        LSSI-CE: De conformidad con lo establecido en la Ley 34/2002 de
        Servicios de la Sociedad de la Información y del Comercio Electrónico,
        le informamos que esta política de privacidad se aplica a todas las
        comunicaciones electrónicas realizadas a través de este servicio y tiene
        como objetivo proteger y salvaguardar la privacidad de los usuarios.
      </p>
      <p>
        LOPD/ RGPD: En cumplimiento de la Ley Orgánica de Protección de Datos
        Personales y el Reglamento General de Protección de Datos, sus datos
        personales serán tratados de manera confidencial y se utilizarán
        únicamente con el propósito de proporcionarle los servicios solicitados
        a través de este formulario de contacto.
      </p>
      <p>
        Recopilación de datos personales: Al completar y enviar el formulario de
        contacto, se recopilarán los siguientes datos personales: nombre y
        apellidos, dirección de correo electrónico y cualquier otra información
        relevante que usted proporcione voluntariamente.
      </p>
      <p>
        Uso de datos personales: Los datos personales recopilados se utilizarán
        únicamente para comunicarnos con usted, responder a sus consultas y
        brindarle los servicios de fisioterapia a domicilio solicitados. No
        utilizaremos sus datos personales para ningún otro propósito sin su
        consentimiento expreso.
      </p>
      <p>
        Almacenamiento de datos: Sus datos personales serán almacenados de forma
        segura en nuestros sistemas y se conservarán durante el tiempo necesario
        para cumplir con los fines para los que fueron recopilados, a menos que
        usted solicite su eliminación.
      </p>
      <p>
        Divulgación de datos: No compartiremos sus datos personales con
        terceros, excepto cuando sea necesario para cumplir con nuestras
        obligaciones legales o cuando contemos con su consentimiento expreso.
      </p>
      <p>
        Seguridad de datos: Hemos implementado medidas de seguridad apropiadas
        para proteger sus datos personales contra accesos no autorizados, uso
        indebido, divulgación o alteración. Sin embargo, tenga en cuenta que
        ninguna transmisión de datos a través de Internet o cualquier sistema de
        almacenamiento electrónico puede garantizar la seguridad absoluta.
      </p>
      <p>
        Sus derechos: Usted tiene derecho a acceder, rectificar, cancelar y
        oponerse al tratamiento de sus datos personales. Si desea ejercer alguno
        de estos derechos, puede ponerse en contacto con nosotros a través de
        los datos de contacto proporcionados al final de esta Política de
        Privacidad.
      </p>
      <p>
        Cambios en la política de privacidad: Nos reservamos el derecho de
        modificar o actualizar esta Política de Privacidad en cualquier momento.
        Cualquier cambio se publicará en esta página, por lo tanto, le
        recomendamos que la revise periódicamente.
      </p>
      <p>
        Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o
        sobre el tratamiento de sus datos personales, no dude en ponerse en
        contacto con nosotros utilizando la siguiente información de contacto:
        Correo electrónico: kinevita.es@gmail.com<br/>Gracias por su confianza.
      </p>
      
    </Container>
  );
};

export { Privacy };
