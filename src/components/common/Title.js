import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 42px;
  text-align: center;
  margin: 30px 0;
`;

export function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
