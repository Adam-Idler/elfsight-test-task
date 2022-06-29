import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Card } from './components';

export function App() {
  const [ characters, setCharacters ] = useState(null);
  const [ isFetching, setIsFetching ] = useState(false);

  const apiURL = "https://rickandmortyapi.com/api/character/";

  const fetchData = async (url) => {
    setIsFetching(true);
    axios.get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
      })
      .catch(e => console.error(e));
  }

  useEffect(() => {
    fetchData(apiURL);
  }, []);

  return (
    <>
      {isFetching && (
        <h1>Loading..</h1>
      )}

      <Container>
        {characters && characters.map((props) =>
          <Card
            key={props.id}
            {...props}
          />
        )}
      </Container>
    </>
  );
}
