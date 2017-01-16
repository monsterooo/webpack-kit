import React from 'react';

const Picker = ({options, value, onChange}) => {
  return(
    <div>
    <span>
      <h3>{value}</h3>
      <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(item =>
        <option value={item} key={item}>{item}</option>
      )}
      </select>
    </span>
    </div>
  )
}

export default Picker;
