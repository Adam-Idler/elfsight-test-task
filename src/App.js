import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Card,
  Loader,
  Pagination,
  Popup,
  WidgetHeader,
  WidgetLogo,
  FilterContainer,
  Text
} from './components';
import styled from 'styled-components';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function App() {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);
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
            {characters?.map((props) => (
              <Card
                key={props.id}
                isFullWidth={characters.length === 1}
                onClickHandler={(e) => {
                  togglePopup(e);
                  setPopupSettings({
                    visible: true,
                    content: { ...props }
                  });
                }}
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80%;
  min-height: 500px;
  margin: 0 auto;
  padding: 20px 0;

  ${window.screen.width < 1200 && 'max-width: 95%'};
  ${window.screen.width < 930 && 'max-width: 70%'};
  ${window.screen.width < 600 && 'max-width: 95%'};
`;
