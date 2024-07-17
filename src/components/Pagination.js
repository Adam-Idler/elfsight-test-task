import styled from 'styled-components';
import { useData } from './providers';

const StyledPagination = styled.div`
  width: 100%;
  text-align: center;
`;

const Page = styled.span`
  color: #fff;
  font-size: 18px;
  padding: 5px 5px;
  cursor: pointer;
  transition: color 0.2s;
  ${({ active }) => active && 'color: #83bf46'};

  &:hover {
    color: #83bf46;
  }
`;

const Ellipsis = styled(Page)`
  cursor: default;

  &:hover {
    color: #fff;
  }
`;

export function Pagination() {
  const { apiURL, info, activePage, setActivePage, setApiURL } = useData();

  const pageClickHandler = (index) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(index);
    setApiURL(pages[index].pageURL);
  };

  const pages = [];

  for (let i = 0; i < info.pages; i++) {
    pages.push({
      index: i,
      pageURL: `${apiURL.replace(/&?page=\d+/, '')}${
        /\?/g.test(apiURL) ? '&' : '?'
      }page=${i + 1}`
    });
  }

  if (pages.length <= 1) return null;

  return (
    <StyledPagination>
      {pages[activePage - 1]?.pageURL && (
        <>
          {activePage - 1 !== 0 && (
            <>
              <Page key={0} onClick={() => pageClickHandler(0)}>
                « First
              </Page>
              <Ellipsis>...</Ellipsis>
            </>
          )}
          <Page
            key={activePage - 1}
            onClick={() => pageClickHandler(activePage - 1)}
          >
            {activePage}
          </Page>
        </>
      )}

      <Page key={activePage} active>
        {activePage + 1}
      </Page>

      {pages[activePage + 1]?.pageURL && (
        <>
          <Page
            key={activePage + 1}
            onClick={() => pageClickHandler(activePage + 1)}
          >
            {activePage + 2}
          </Page>
          {activePage + 1 !== pages.length - 1 && (
            <>
              <Ellipsis>...</Ellipsis>
              <Page
                key={pages.length - 1}
                onClick={() => pageClickHandler(pages.length - 1)}
              >
                Last »
              </Page>
            </>
          )}
        </>
      )}
    </StyledPagination>
  );
}
