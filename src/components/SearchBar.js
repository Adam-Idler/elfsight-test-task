import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.form`
  position: relative;
  width: 25%;
  background: #57bd84;
  border-radius: 7px;
`;

const SearchBarButton = styled.button`
  cursor: pointer;
  height: 40px;
  border: 0;
  color: #2f2f2f;
  font-size: 18px;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  font-weight: bold;
  background: #83bf46;
  border-radius: 0 7px 7px 0;
`;

const StyledSearchBar = styled.input`
  height: 40px;
  border: 0;
  color: #2f2f2f;
  font-size: 18px;
  outline: 0;
  width: 100%;
  background: #fff;
  padding: 0 10px;
  border-radius: 7px;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;

  &:not(:placeholder-shown) {
    border-radius: 7px 0 0 7px;
    width: calc(100% - 60px);
  }

  &:not(:placeholder-shown) + button {
    display: block;
  }
`;

export function SearchBar({ setApiURL }) {
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    setTimeout(() => setSearchValue(inputRef.current.value), 1000);
  };

  useEffect(() => {
    setApiURL(`https://rickandmortyapi.com/api/character/?name=${searchValue}`);
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <SearchBarContainer onSubmit={searchHandler}>
      <StyledSearchBar
        placeholder="Search by name..."
        ref={inputRef}
        onChange={searchHandler}
        autoFocus
      />
      <SearchBarButton type="submit">Go</SearchBarButton>
    </SearchBarContainer>
  );
}
