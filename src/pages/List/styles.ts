import styled from 'styled-components';
import Content from '../../components/Content';

export const Container = styled(Content)`

`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  

  .label {
    margin-top: 2.4rem;
    font-size: 1.4rem;
  }
  .order-options {
    margin-top: 1.2rem;
    display: flex;
    gap: 1.2rem;

    width: 100%;
    overflow-x: auto;

    > button {
      height: 4rem;
      padding: 0 2.4rem;
      flex-shrink: 0;
      color: var(--primary);

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const HeroesList = styled.ul`
  margin-top: 3.2rem;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(1,1fr);
  .block {
    display: flex;
    width: 100%;
    height: 24rem;
  }

  @media (min-width: 44rem) {
    grid-template-columns: repeat(2,1fr);
  }

  @media (min-width: 64rem) {
    grid-template-columns: repeat(3,1fr);
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  background: var(--neutral-200);
  > img {
    width: 100%;
  }

  .title {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary);
  }

  .line {
    height: 0.1rem;
    width: 100%;
    margin: 0.8rem 0;
    background: var(--neutral-400);
  }

  
`;