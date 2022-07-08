import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isFetching }) => (isFetching ? 'column' : 'row')};
  justify-content: space-between;
  max-width: 80%;
  min-height: 500px;
  margin: 0 auto;
  padding: 20px 0;

  ${window.screen.width < 1200 && `max-width: 95%;`}
  ${window.screen.width < 930 && `max-width: 70%;`}
  ${window.screen.width < 600 && `max-width: 95%;`}
`;
