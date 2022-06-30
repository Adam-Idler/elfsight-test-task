import styled from 'styled-components';
import { CardInfo } from './CardInfo';

const StyledCard = styled.div`
  display: flex;
  width: 48%;
  background: #263750;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardImg = styled.img`
  max-width: 200px;
  border-radius: 10px 0 0 10px;
`;

export function Card({ id, status, name, species, type, gender, image }) {
  return (
    <StyledCard key={id}>
      <CardImg src={image} alt={name} />
      <CardInfo name={name} gender={gender} status={status} species={species} />
    </StyledCard>
  );
}
