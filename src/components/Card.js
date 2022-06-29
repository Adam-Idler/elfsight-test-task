import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: 48%;
`;

export function Card({
  id,
  status,
  name,
  species,
  type,
  gender,
  image
}) {
  console.log(name);
  return (
    <StyledCard key={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{status}</h3>
    </StyledCard>
  );
}
