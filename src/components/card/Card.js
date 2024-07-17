import styled from 'styled-components';
import { CardInfo, CardStatus, CardTitle } from './';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  /* margin-bottom: 20px; */
  /* min-height: 150px;
  max-height: 250px; */
  /* width: ${({ isFullWidth }) =>
    isFullWidth || window.screen.width < 930 ? '100%' : '20%'}; */

  /* &:nth-last-child(${window.screen.width < 930 ? '1' : '2'}) {
    margin-bottom: 0;
  } */

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
  /* border-radius: 10px 0 0 10px; */
  border-radius: 10px 10px 0 0;
  /* max-width: ${window.screen.width < 450 ? '150px' : '300px'}; */
`;

export function Card({
  id,
  status,
  name,
  species,
  type,
  gender,
  image,
  onClickHandler,
  isFullWidth
}) {
  return (
    <StyledCard key={id} onClick={onClickHandler} isFullWidth={isFullWidth}>
      <CardImg src={image} alt={name} />

      <CardInfo>
        <CardTitle name={name} gender={gender} className="card-title" />
        <CardStatus status={status} species={species} type={type} />
      </CardInfo>
    </StyledCard>
  );
}
