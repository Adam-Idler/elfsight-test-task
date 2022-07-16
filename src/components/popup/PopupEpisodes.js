import axios from 'axios';
import { Text } from '../common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loader } from '../Loader';

const StyledPopupEpisodes = styled.div`
  display: flex;
  flex-direction: column;

  ${({ _length }) => {
    if (_length > 20) {
      return `
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 
          repeat(${
            window.screen.width < 600 ? _length : Math.ceil(_length / 2)
          }, 1fr);

        & p {
          width: 95%;
          border-bottom: 2px solid #eee;
        }

        & span {
          margin-bottom: ${window.screen.width < 600 ? '10px' : 0};
        }
      `;
    }
  }}

  ${window.screen.width < 600 &&
  `
    grid-template-columns: 1fr;
  `}
`;

const Episode = styled.p`
  width: 100%;
  display: grid;
  align-items: center;
  padding: 10px 0;
`;

const EpisodeMarking = styled.span`
  margin-bottom: 8px;
  color: #83bf46;
`;

export function PopupEpisodes({ episodes }) {
  const [series, setSeries] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!episodes || !episodes.length) return;
    setIsFetching(true);
    const episodesIds = episodes.map((ep) => ep.match(/\d+$/)[0]);

    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodesIds.join(',')}`)
      .then(({ data }) => {
        setIsFetching(false);
        if (episodes.length === 1) {
          setSeries([data]);
        } else {
          setSeries(data);
        }
      });
  }, [episodes]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Text>Participated in episodes:</Text>
          <StyledPopupEpisodes _length={series.length}>
            {series &&
              series.map(({ id, name, episode }) => (
                <Episode _length={series.length} key={id}>
                  <EpisodeMarking>
                    {episode
                      .replace(/S0?(\d+)/, 'Season $1 - ')
                      .replace(/E0?(\d+)/, 'Ep. $1')}
                  </EpisodeMarking>
                  {name}
                </Episode>
              ))}
          </StyledPopupEpisodes>
        </>
      )}
    </>
  );
}
