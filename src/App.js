import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Loader,
  Pagination,
  Popup,
  SearchBar,
  WidgetHeader,
  WidgetLogo
} from './components';

export function App() {
  const [characters, setCharacters] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [popupSettings, setPopupSettings] = useState({ visible: false });
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(
    'https://rickandmortyapi.com/api/character/'
  );
  const pages = [];

  const togglePopup = (e) => {
    document.body.style.overflow = !popupSettings.visible ? 'hidden' : 'auto';
    if (e.currentTarget !== e.target) return;

    setPopupSettings((prevState) => ({
      ...prevState,
      visible: !prevState.visible
    }));
  };

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
      <WidgetHeader>
        <WidgetLogo />
        <SearchBar setApiURL={setApiURL} />
      </WidgetHeader>

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
                    setPopupSettings({
                      visible: true,
                      content: { ...props }
                    });
                  }}
                  isFullWidth={characters.length === 1}
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
