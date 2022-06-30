import styled from 'styled-components';
import { GenderIcon } from './GenderIcon';

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

const CardTitle = styled.h2``;

const CardGender = styled.span``;

const CardStatusContainer = styled.div`
  display: flex;
`;

const CardStatus = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &::before {
    content: '';
    display: block;
    margin-right: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ status }) => {
      switch (status) {
        case 'Alive':
          return '#5df8d0';
        case 'Dead':
          return '#ff5152';
        default:
          return '#968c9d';
      }
    }};
  }
`;

const CardSpecies = styled.span``;

export function Card({ id, status, name, species, type, gender, image }) {
  return (
    <StyledCard key={id}>
      <CardImg src={image} alt={name} />

      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <GenderIcon gender={gender} />
        <CardStatusContainer>
          <CardStatus status={status}>{status}</CardStatus>
          &nbsp;-&nbsp;
          <CardSpecies>{species}</CardSpecies>
        </CardStatusContainer>
      </CardInfo>
    </StyledCard>
  );
}
