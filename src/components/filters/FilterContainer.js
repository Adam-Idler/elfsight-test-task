import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilterList, SearchBar } from './';

const SearchBarContainer = styled.div`
  display: flex;
`;

const ChangeSearchButton = styled.button`
  width: 50px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  text-transform: capitalize;
  user-select: none;
  transition: border-color 0.3s;

  &:hover {
    border-color: #83bf46;
  }
`;

const StyledFilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;

  ${window.screen.width < 930 &&
  `
    width: 100%;
  `}
`;

export function FilterContainer({ setApiURL, setActivePage }) {
  const formRef = useRef(null);
  const [currentVisibleField, setCurrentVisibleField] = useState('name');
  const [searching, setSearching] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    type: '',
    species: '',
    gender: '',
    status: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e?.target || e;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const searchBtnClickHandler = () => {
    setCurrentVisibleField((prevState) => {
      if (prevState === 'name') return 'type';
      return 'name';
    });
  };

  useEffect(() => {
    const searchValue = `${Object.keys(formValues)
      .filter((elem) => formValues[elem]?.length)
      .map((elem) => `${elem}=${formValues[elem]}`)
      .join('&')}`;

    setApiURL(
      `https://rickandmortyapi.com/api/character/${
        searchValue ? '?' : ''
      }${searchValue}`
    );
    setActivePage(0);
    setSearching(false);
    // eslint-disable-next-line
  }, [searching]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearching(true);
  };

  useEffect(() => {
    if (Object.keys(formValues).every((elem) => !formValues[elem]))
      formRef.current.classList.remove('active');
    else formRef.current.classList.add('active');
  }, [formValues]);

  return (
    <StyledFilterContainer ref={formRef} onSubmit={searchHandler}>
      <SearchBarContainer>
        <ChangeSearchButton type="button" onClick={searchBtnClickHandler}>
          {currentVisibleField === 'name' ? 'type' : 'name'}
        </ChangeSearchButton>
        <SearchBar
          name={currentVisibleField}
          formValues={formValues}
          changeHanlder={onChangeHandler}
        />
      </SearchBarContainer>

      <FilterList changeHanlder={onChangeHandler} />
    </StyledFilterContainer>
  );
}
