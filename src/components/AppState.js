import styled from 'styled-components';
import { Loader, Text } from './common';
import { useData } from './providers';

export function AppState() {
  const { isFetching, isError } = useData();

  if (isError) {
    return (
      <AppStateContainer>
        <Text style={{ margin: 'auto' }}>
          An error has occurred. Try other search parameters.
        </Text>
      </AppStateContainer>
    );
  }

  if (isError) {
    return (
      <AppStateContainer>
        <Loader />
      </AppStateContainer>
    );
  }

  return null;
}

const AppStateContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
