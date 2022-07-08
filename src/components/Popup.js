import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0;
  visible: none;
  pointer-events: none;
  transition: opacity 0.3s, visible 0.3s;

  ${({ visible }) => {
    if (visible) {
      return `
        opacity: 1;
        visible: initial;
        pointer-events: all;
      `;
    }
  }}
`;

const StyledPopup = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(15vh - 20px);
  background: #263750;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #5df8d0;
  overflow: auto;
`;

const CloseIcon = styled.div`
  cursor: pointer;
  position: fixed;
  right: calc(20% - 10px);
  top: calc(15vh - 30px);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5df8d0aa;

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

export function Popup({ visible, content, onClickHandler }) {
  return (
    <PopupContainer visible={visible} onClick={onClickHandler}>
      <StyledPopup>
        <CloseIcon onClick={onClickHandler} />
        {content}
      </StyledPopup>
    </PopupContainer>
  );
}
