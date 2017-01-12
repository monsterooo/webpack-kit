import React from 'react';

const Picker = ({options, value, onChange}) => {
  return(
    <span>
      <h3>{value}</h3>
      <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(item =>
        <option value={item} key={item}>{item}</option>
      )}
      </select>
    </span>
  )
}

export default Picker;
