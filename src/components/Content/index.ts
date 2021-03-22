import styled from 'styled-components';
import { appearFromLeft } from '../../styles/Animations';

export default styled.div`
  background: var(--neutral-100);
  padding: 2.4rem 2.4rem 4rem;
  width: min(100%, 64rem);
  
  animation: ${appearFromLeft} 0.8s;
  
  h1 {
    font-size: 3.2rem;
    span {
      color: var(--primary);
    }
  }

  p.description {
    font-size: 1.4rem;
    color: var(--neutral-600);
  }
`;
