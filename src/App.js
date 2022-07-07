import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Card } from './components';
import { Title } from './components/common/Title';

export function App() {
  const [characters, setCharacters] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const apiURL = 'https://rickandmortyapi.com/api/character/';

  const fetchData = async (url) => {
    setIsFetching(true);
    axios
      .get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchData(apiURL);
  }, []);

  return (
    <>
      <Title>Characters List</Title>

      <Container>
        {isFetching && <h1>Loading..</h1>}

        {characters &&
          characters.map((props) => <Card key={props.id} {...props} />)}
      </Container>
    </>
  );
}
