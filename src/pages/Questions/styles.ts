import styled from 'styled-components';
import Content from '../../components/Content';

export const Container = styled(Content)`
  form {
    margin-top: 3.2rem;
    > div + div, button {
      margin-top: 1.6rem;
    }
  }
`;
