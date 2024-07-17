import styled from 'styled-components';

const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  /* margin-left: 10px; */
  /* width: calc(100% - ${window.screen.width < 450 ? '150px' : '200px'}); */
`;

export function CardInfo({ children }) {
  return <StyledCardInfo>{children}</StyledCardInfo>;
}
