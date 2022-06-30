import styled from 'styled-components';
import { CardStatus } from './CardStatus';
import { CardTitle } from './CardTitle';

const StyledCardInfo = styled.div`
  width: calc(100% - 200px);
  padding: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export function CardInfo({ name, gender, status, species }) {
  return (
    <StyledCardInfo>
      <CardTitle name={name} gender={gender} />
      <CardStatus status={status} species={species} />
    </StyledCardInfo>
  );
}
