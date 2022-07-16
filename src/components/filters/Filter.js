import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: '#fff',
    textTransform: 'capitalize'
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
