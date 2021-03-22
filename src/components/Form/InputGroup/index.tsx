import React, { InputHTMLAttributes } from 'react';
import Input from '../Input';

import { Container } from './styles';
interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
}

const InputGroup = ({label, ...rest}: Props) => {
  return (
    <Container>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <Input {...rest}/>
    </Container>
  );
}

export default InputGroup;