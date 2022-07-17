import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    textTransform: 'capitalize',
    borderColor: state.isFocused && '#83bf46 !important',
    boxShadow: state.isFocused && '0 0 0 1px #83bf46 !important'
  })
};

export function Filter({ options, name, changeHanlder }) {
  return (
    <Select
      isClearable
      isSearchable={false}
      styles={customStyles}
      placeholder={name}
      onChange={(option) => changeHanlder({ ...option, name })}
      options={options}
    />
  );
}
