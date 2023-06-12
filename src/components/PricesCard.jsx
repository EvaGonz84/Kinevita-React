import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #2de9d6;
  padding: 2rem;
  &:hover {
    box-shadow: 0 3px 10px rgb(45 233 214 / 0.2);
    cursor: pointer;
  }

  h4 {
    text-transform: uppercase;
  }
`;

const PricesCard = ({ description, price }) => {
  return (
    <>
      <CardContainer>
        <h4>{description}</h4>
        <p>{price}</p>
      </CardContainer>
    </>
  );
};

export { PricesCard };
