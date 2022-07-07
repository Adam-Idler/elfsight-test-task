import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Card } from './components';
import { Title } from './components/common/Title';
import { Loader } from './components/Loader';
import { Pagination } from './components/pagination/Pagination';

export function App() {
  const [characters, setCharacters] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/character/'
  );
  const pages = [];

  const fetchData = async (url) => {
    setIsFetching(true);
    axios
      .get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchData(apiURL);
  }, [apiURL]);

  for (let i = 0; i < info.pages; i++) {
    pages.push({
      index: i,
      prev: info.prev,
      next: info.next,
      pageURL: `https://rickandmortyapi.com/api/character/?page=${i + 1}`
    });
  }

  return (
    <>
      <Title>Characters List</Title>

      <Container isFetching={isFetching}>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {characters &&
              characters.map((props) => <Card key={props.id} {...props} />)}
          </>
        )}

        <Pagination pages={pages} setApiURL={setApiURL} />
      </Container>
    </>
  );
}
