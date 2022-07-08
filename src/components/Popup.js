import styled from 'styled-components';
import { CardStatus, CardTitle } from './card';

const PopupTitle = styled(CardTitle)`
  font-size: 22px;
  justify-content: center;
  margin-top: 30px;
`;

const PopupStatus = styled(CardStatus)`
  font-size: 20px;
  justify-content: center;

  & p {
    text-align: center;
    margin-top: 10px;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  color: #fff;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s, visible 0.3s;

  ${({ visible }) => {
    if (visible) {
      return `
        opacity: 1;
        visibility: initial;
        pointer-events: all;
      `;
    }
  }}
`;

const StyledPopup = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  height: auto;
  max-height: 90vh;
  margin-top: calc(15vh - 20px);
  background: #263750;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #83bf46;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CloseIcon = styled.div`
  cursor: pointer;
  position: fixed;
  right: calc(30% - 10px);
  top: calc(15vh - 30px);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #83bf46aa;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
  }

  &:before {
    left: 4.5px;
    transform: rotate(-45deg);
  }

  &:after {
    right: 4.5px;
    transform: rotate(45deg);
  }
`;

const PopupImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
`;

export function Popup({ visible, content = {}, onClickHandler }) {
  const { name, gender, image, status, species, type } = content;
  return (
    <PopupContainer onClick={onClickHandler} visible={visible}>
      <StyledPopup>
        <CloseIcon onClick={onClickHandler} />
        <PopupImage src={image?.replace('../', '')} alt={name} />
        <PopupTitle name={name} gender={gender} />
        <PopupStatus status={status} species={species} type={type} />
      </StyledPopup>
    </PopupContainer>
  );
}
