import styled from 'styled-components';
import { GenderIcon } from '../GenderIcon';

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledCardTitle = styled.h2`
  margin-right: 8px;
`;

export function CardTitle({ name, gender }) {
  return (
    <CardTitleContainer>
      <StyledCardTitle>{name}</StyledCardTitle>
      <GenderIcon gender={gender} />
    </CardTitleContainer>
  );
}
