import styled from 'styled-components';

const StyledCardInfo = styled.div`
  width: calc(100% - ${window.screen.width < 450 ? '150px' : '200px'});
  padding: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export function CardInfo({ children }) {
  return <StyledCardInfo>{children}</StyledCardInfo>;
}
