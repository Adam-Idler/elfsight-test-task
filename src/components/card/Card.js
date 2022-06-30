import styled from 'styled-components';
import { CardStatus } from './CardStatus';
import { CardTitle } from './CardTitle';

const StyledCard = styled.div`
  display: flex;
  width: 48%;
  background: #263750;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const CardImg = styled.img`
  max-width: 200px;
  border-radius: 10px 0 0 10px;
`;

const CardInfo = styled.div`
  width: calc(100% - 200px);
  padding: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export function Card({ id, status, name, species, type, gender, image }) {
  return (
    <StyledCard key={id}>
      <CardImg src={image} alt={name} />

      <CardInfo>
        <CardTitle name={name} gender={gender} />
        <CardStatus status={status} species={species} />
      </CardInfo>
    </StyledCard>
  );
}
