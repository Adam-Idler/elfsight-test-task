import styled from 'styled-components';
import { Pagination, ItemsGrid, useData, Header, AppState } from './components';

export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <Header />

      <AppStateContainer>
        <AppState />
      </AppStateContainer>

      {!isFetching && !isError && (
        <>
          <ItemsGrid />

          <Pagination />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
  max-width: 80%;
  margin: 0 auto;

  ${window.screen.width < 1200 && 'max-width: 95%'};
  ${window.screen.width < 930 && 'max-width: 70%'};
  ${window.screen.width < 600 && 'max-width: 90%'};
`;

const AppStateContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
