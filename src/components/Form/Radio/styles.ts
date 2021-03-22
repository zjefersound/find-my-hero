import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  } 

  > .radio-container {
    display: flex;
    gap: 1.6rem;
    > label {
      color: var(--neutral-900);
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      input {
        margin-right: 0.4rem;
      }
    }
  }
`;
