import styled from 'styled-components';

export default styled.input`
  height: 4rem;
  background: var(--neutral-200);
  border: 0;
  padding: 1.6rem; 

  transition: 0.3s;
  outline: 0.2rem solid transparent;

  &:focus {
    outline-color: var(--primary);
  }

  
 
`;
