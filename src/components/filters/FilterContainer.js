import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilterList, SearchBar } from './';

const StyledFilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;

  ${window.screen.width < 930 &&
  `
    width: 100%;
  `}
`;

export function FilterContainer({ setApiURL }) {
  const formRef = useRef(null);
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
      <SearchBar name="name" changeHanlder={onChangeHandler} />

      <FilterList changeHanlder={onChangeHandler} />
    </StyledFilterContainer>
  );
}
