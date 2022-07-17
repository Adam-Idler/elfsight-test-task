import styled from 'styled-components';
import { Filter } from './Filter';
import { statusOptions, genderOptions, speciesOptions } from './filtersOptions';

const StyledFilterList = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 32%;
  }
`;

export function FilterList({ changeHanlder }) {
  return (
    <StyledFilterList>
      <Filter
        name="status"
        options={statusOptions}
        changeHanlder={changeHanlder}
      />
      <Filter
        name="gender"
        options={genderOptions}
        changeHanlder={changeHanlder}
      />
      <Filter
        name="species"
        options={speciesOptions}
        changeHanlder={changeHanlder}
      />
    </StyledFilterList>
  );
}
