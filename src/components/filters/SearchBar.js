import styled from 'styled-components';

export function SearchBar({ name, formValues, changeHandler }) {
  return (
    <SearchBarContainer>
      <StyledSearchBar
        name={name}
        value={formValues[name]}
        placeholder={`Search by ${name}...`}
        onChange={changeHandler}
      />

      <SearchBarButton type="submit">Go</SearchBarButton>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  position: relative;
  background: #83bf46;
  border-radius: 7px;
  margin-bottom: 20px;
  width: 100%;
`;

const StyledSearchBar = styled.input`
  height: 40px;
  width: 100%;
  border: 0;
  color: #2f2f2f;
  font-size: 16px;
  outline: 0;
  background: #fff;
  padding: 0 10px;
  border-radius: 7px;
  transition: all 0.3s cubic-bezier(0, 0, 0.45, 1.5);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  border: 2px solid transparent;
  transition: border-color 0.3s;

  &:hover {
    border-color: #83bf46;
  }

  .active & {
    border-radius: 7px 0 0 7px;
    border-right: 0;
    width: calc(100% - 60px);
  }
`;

const SearchBarButton = styled.button`
  cursor: pointer;
  width: 60px;
  height: 40px;
  border: none;
  color: #2f2f2f;
  font-size: 18px;
  font-weight: bold;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: #83bf46;
  border-radius: 0 7px 7px 0;

  .active & {
    display: block;
  }
`;
