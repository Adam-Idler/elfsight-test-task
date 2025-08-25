import styled from 'styled-components';
import { Pagination, ItemsGrid, useData, Header, AppState } from './components';
import { ElfsightWidget } from 'react-elfsight-widget';

export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <Header />

      <AppState />

      {!isFetching && !isError && (
        <>
          <ItemsGrid />

          <Pagination />
        </>
      )}

      <ElfsightWidget
        widgetId="535fcf90-6289-4de6-b9d2-254ad531ba61"
        style={{ margin: '20px 0' }}
        lazy
      />
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
  ${window.screen.width < 930 && 'max-width: 85%'};
  ${window.screen.width < 600 && 'max-width: 90%'};
`;
