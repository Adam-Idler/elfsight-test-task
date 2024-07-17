import styled from 'styled-components';
import { CardStatus, CardTitle } from '../card';

const PopupTitle = styled(CardTitle)`
  font-size: 22px;
  margin-top: 30px;
  justify-content: center;
`;

const PopupStatus = styled(CardStatus)`
  font-size: 20px;
  justify-content: center;

  & p {
    text-align: center;
    margin-top: 10px;
  }
`;

const PopupImage = styled.img`
  display: block;
  border-radius: 5px;
  margin: 0 auto;
  object-fit: cover;
  max-width: ${window.screen.width < 600 ? '200px' : '300px'};
  max-height: ${window.screen.width < 600 ? '200px' : '300px'};
`;

export function PopupHeader({ image, name, gender, status, species, type }) {
  return (
    <>
      <PopupImage src={image?.replace('../', '')} alt={name} />
      <PopupTitle name={name} gender={gender} />
      <PopupStatus status={status} species={species} type={type} />
    </>
  );
}
