import styled from 'styled-components';
import { GenderIcon } from '../GenderIcon';

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledCardTitle = styled.h2`
  margin-right: 8px;
  transition: color 0.3s;
`;

export function CardTitle({ name, gender }) {
  return (
    <CardTitleContainer>
      <StyledCardTitle className="card-title">{name}</StyledCardTitle>
      <GenderIcon gender={gender} />
    </CardTitleContainer>
  );
}
