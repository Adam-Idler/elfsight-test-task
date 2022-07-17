import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Loader,
  Pagination,
  Popup,
  WidgetHeader,
  WidgetLogo,
  FilterContainer,
  Text
} from './components';

export function App() {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
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
    setIsError(false);
    axios
      .get(url)
      .then(({ data }) => {
        setIsFetching(false);
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((e) => {
        setIsError(true);
        console.error(e);
      });
  };

  for (let i = 0; i < info.pages; i++) {
    pages.push({
      index: i,
      pageURL: `${apiURL.replace(/&?page=\d+/, '')}${
        /\?/g.test(apiURL) ? '&' : '?'
      }page=${i + 1}`
    });
  }

  useEffect(() => {
    fetchData(apiURL);
  }, [apiURL]);

  return (
    <>
      <WidgetHeader>
        <WidgetLogo />
        <FilterContainer setApiURL={setApiURL} setActivePage={setActivePage} />
      </WidgetHeader>

      <Container>
        {isFetching && !isError && <Loader />}
        {isError && (
          <Text style={{ margin: 'auto' }}>
            An error has occurred. Try other search parameters.
          </Text>
        )}

        {!isFetching && !isError && (
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

            <Popup
              visible={popupSettings.visible}
              content={popupSettings.content}
              onClickHandler={togglePopup}
            />

            <Pagination
              pages={pages}
              setApiURL={setApiURL}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </>
        )}
      </Container>
    </>
  );
}
