import React from 'react';
import { useHistory } from 'react-router';

import { Container, ArrowLeftIcon } from './styles';

const GoBackButton: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => history.go(-1);
  return (
    <Container onClick={handleGoBack}>
      <ArrowLeftIcon />
      Go back
    </Container>
  );
}

export default GoBackButton;