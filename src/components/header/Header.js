import styled from 'styled-components';
import { Logo } from './Logo';
import { FilterContainer } from '../filters';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  ${window.screen.width < 930 && 'flex-direction: column'};
`;

export function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <FilterContainer />
    </HeaderContainer>
  );
}
