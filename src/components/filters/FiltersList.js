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

export function FilterList({ changeHandler }) {
  return (
    <StyledFilterList>
      <Filter
        name="status"
        options={statusOptions}
        changeHandler={changeHandler}
      />
      <Filter
        name="gender"
        options={genderOptions}
        changeHandler={changeHandler}
      />
      <Filter
        name="species"
        options={speciesOptions}
        changeHandler={changeHandler}
      />
    </StyledFilterList>
  );
}
