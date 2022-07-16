import styled from 'styled-components';

export const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 0;

  ${window.screen.width < 1200 && `max-width: 95%;`}
  ${window.screen.width < 930 &&
  `
    max-width: 70%;
    flex-direction: column;
  `}
  ${window.screen.width < 600 && `max-width: 95%;`}
`;
