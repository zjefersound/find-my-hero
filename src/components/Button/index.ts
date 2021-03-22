import styled from 'styled-components';

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
  padding: 0 2.4rem;

  color: var(--neutral-100);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;

  background: var(--primary);

  &:hover {
    background: var(--primary-dark);
  }
`;
