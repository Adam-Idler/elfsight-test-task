import styled from 'styled-components';
import { CardInfo, CardStatus, CardTitle } from './';

const StyledCard = styled.div`
  display: flex;
  width: ${window.screen.width < 930 ? '100%' : '48%'};
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;

  &:nth-last-child(${window.screen.width < 930 ? '1' : '2'}) {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover .card-title {
    color: #83bf46;
  }
`;

const CardImg = styled.img`
  max-width: ${window.screen.width < 450 ? '150px' : '200px'};
  border-radius: 10px 0 0 10px;
`;

export function Card({
  id,
  status,
  name,
  species,
  type,
  gender,
  image,
  onClickHandler
}) {
  return (
    <StyledCard key={id} onClick={onClickHandler}>
      <CardImg src={image} alt={name} />
      <CardInfo>
        <CardTitle name={name} gender={gender} className="card-title" />
        <CardStatus status={status} species={species} type={type} />
      </CardInfo>
    </StyledCard>
  );
}
