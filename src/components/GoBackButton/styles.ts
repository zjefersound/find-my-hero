import styled from 'styled-components';
import {FiArrowLeft} from 'react-icons/fi';

export const Container = styled.button`
  background: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  &:hover {
    opacity: 0.7;
  }
`;

export const ArrowLeftIcon = styled(FiArrowLeft)`
  color: var(--primary);
  height: 2rem; 
  width: 2rem;
  margin-right: 0.8rem; 
`;
