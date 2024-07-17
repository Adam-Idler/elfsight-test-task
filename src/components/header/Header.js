import styled from 'styled-components';
import { Logo } from './Logo';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${window.screen.width < 930 && 'flex-direction: column'};

  & > :only-child {
    margin: 0 auto;
  }
`;
