import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';
export interface Option {
  value: string;
  label: string;
  
}
interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  value?: string;
  options: Option[];
}

const Radio = ({label, options, value, ...rest}: Props) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <div className="radio-container">
        {options.map(option => (
          <label key={option.value} htmlFor={rest.id}>
            <input type="radio" {...rest} value={option.value} checked={value === option.value} />
            {option.label} 
          </label>
        ))}
      </div>
    </Container>
  );
}

export default Radio;