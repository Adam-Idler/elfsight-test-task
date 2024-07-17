import { Loader, Text } from './common';
import { useData } from './providers';

export function AppState() {
  const { isFetching, isError } = useData();

  if (isError) {
    return (
      <Text style={{ margin: 'auto' }}>
        An error has occurred. Try other search parameters.
      </Text>
    );
  }

  if (isFetching) {
    return <Loader />;
  }

  return null;
}
