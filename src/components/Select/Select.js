import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const SelectComponent = ({defaultValue, onChange, value, options, width}) => {
    const customStyles = {
    container: (provided, state) => ({
        ...provided,
        width
    }),
    }
  return (
    <Select
      styles={customStyles}
      width={`${width}px`}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={defaultValue}
      options={options}
      onChange={(event) => onChange(event.value)}
    />
  );
}