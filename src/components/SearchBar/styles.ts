import styled from 'styled-components';

import { FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  &::before {
    width: 100%;
    height: 0.1rem;
    content: '';
    background: var(--neutral-200);
    position: absolute;
    bottom: 0;
  }
  &:focus-within::after {
    width: 100%;
    height: 0.2rem;
    content: '';
    background: var(--primary);
    position: absolute;
    bottom: 0;
    animation: grow-x;
    animation-duration: 0.2s;
  }

  @keyframes grow-x{
    from{
      width: 0;
    }
    to{
      width: 100%;
    }
  }

  &.remove-bottom-line {
    &::before {
      display: none;
    }
    &:focus-within::after {
      display: none;
    }
  }
`;
export const SearchIcon = styled(FiSearch)`
  height: 2rem;
  width: 2rem;

  position: absolute;
  stroke: var(--primary);
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 3.6rem;
  outline: 0;
  border: 0;
  box-shadow: 0;
  color: var(--tneutral-900);

  &::placeholder {
    color: var(--neutral-600);
  }
`;
