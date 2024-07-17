import styled from 'styled-components';

const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;

export function CardInfo({ children }) {
  return <StyledCardInfo>{children}</StyledCardInfo>;
}
