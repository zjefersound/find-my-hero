import React, { InputHTMLAttributes } from 'react';

import { 
  Container,
  SearchIcon,
  Input,
} from './styles';
 
interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  removeBottomLine?: boolean;
}
const SearchBar: React.FC<SearchBarProps> = ({removeBottomLine, ...rest}) => {
  return (
    <Container className={removeBottomLine ? 'remove-bottom-line' : ''}>
      <SearchIcon />
      <Input 
        {...rest}
        type='search'
        placeholder='Search...'
      />
    </Container>
  );
}

export default SearchBar;