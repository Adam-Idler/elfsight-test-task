import styled from 'styled-components';

const defaultColor = '#ccc';
const defaultFontSize = '16px';

const StyledText = styled.span`
  color: ${({ _color = defaultColor }) => _color};
  font-size: ${({ _fontSize = defaultFontSize }) => _fontSize};
`;

export function Text({ children, style }) {
  return <StyledText style={style}>{children}</StyledText>;
}
