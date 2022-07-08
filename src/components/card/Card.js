import styled from 'styled-components';
import { CardInfo, CardStatus, CardTitle } from './';

const StyledCard = styled.div`
  display: flex;
  width: ${({ _width }) => _width};
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;

  &:nth-last-child(${({ _width }) =>
        '-n + ' + Math.ceil(100 / _width.replace('%', ''))}) {
    margin-bottom: 0;
  }

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
    <StyledCard _width="48%" key={id} onClick={onClickHandler}>
      <CardImg src={image} alt={name} />
      <CardInfo>
        <CardTitle name={name} gender={gender} />
        <CardStatus status={status} species={species} type={type} />
      </CardInfo>
    </StyledCard>
  );
}
