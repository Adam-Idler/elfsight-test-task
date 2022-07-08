import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Card, Title, Loader, Pagination } from './components';
import { Popup } from './components/Popup';

export function App() {
  const [characters, setCharacters] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [popupSettings, setPopupSettings] = useState({ visible: false });
  const [info, setInfo] = useState({});
  const [filters, setFilters] = useState({});
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/character/'
  );
  const pages = [];

  const togglePopup = (e) => {
    if (e.currentTarget !== e.target) return;

    setPopupSettings((prevState) => ({
      ...prevState,
      visible: !prevState.visible
    }));
    document.body.style.overflow = !popupSettings.visible ? 'hidden' : 'auto';
  };

  const fetchData = async (url) => {
    setIsFetching(true);
    axios
      .get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
        setFilters((prevState) => ({
          ...prevState,
          ...{
            status: ['alive', 'dead', 'unknown'],
            species: [...new Set(data.results.map((item) => item.species))],
            type: [...new Set(data.results.map((item) => item.type))],
            gender: ['female', 'male', 'genderless', 'unknown']
          }
        }));
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
              characters.map((props) => (
                <Card
                  onClickHandler={(e) => {
                    togglePopup(e);
                    setPopupSettings({ visible: true, content: { ...props } });
                  }}
                  key={props.id}
                  {...props}
                />
              ))}
          </>
        )}
        <Popup
          visible={popupSettings.visible}
          content={popupSettings.content}
          onClickHandler={togglePopup}
        />
        <Pagination pages={pages} setApiURL={setApiURL} />
      </Container>
    </>
  );
}
