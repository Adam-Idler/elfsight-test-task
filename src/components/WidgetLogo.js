import styled from 'styled-components';
import widgetLogo from '../assets/widget-logo.png';

const StyledWidgetLogo = styled.img`
  max-width: 300px;
`;

export function WidgetLogo() {
  return <StyledWidgetLogo src={widgetLogo} alt="logo" />;
}
