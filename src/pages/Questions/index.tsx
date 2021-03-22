import React, { FormEvent, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputGroup from '../../components/Form/InputGroup';
import Radio, { Option } from '../../components/Form/Radio';
import Layout from '../../components/Layout';
import { QuestionsContext } from '../../contexts/QuestionsContext';

import { Container } from './styles';

const seriesOrComicsOptions: Option[] = [
  { value: 'comics', label: 'Comics' },
  { value: 'series', label: 'Series' },
];

const Questions = () => {
  const history = useHistory();
  const { data, handleInputChange } = useContext(QuestionsContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { name, birthday, seriesOrComics } = data;

    const isValid = name.trim() && birthday && seriesOrComics;
    if (isValid) {
      history.push('/list');
    }
  }

  return (
    <Layout>
      <Container>
        <h1>Let's find your <span>hero!</span></h1>
        <p className="description">It's easy! Answer the questions and know who are your hero</p>

        <Form onSubmit={handleSubmit}>
          <InputGroup
            name="name"
            label="What's your name?"
            value={data.name}
            onChange={handleInputChange}
            required
          />
          <InputGroup
            name="birthday"
            label="What's your birth date?"
            type="date"
            value={data.birthday}
            onChange={handleInputChange}
            required
          />
          <Radio
            label="Do you like series or comics more?"
            name="seriesOrComics"
            options={seriesOrComicsOptions}
            value={data.seriesOrComics}
            onChange={handleInputChange}
            required
          />
          <Button>
            Find!
          </Button>
        </Form>
      </Container>
    </Layout>
  );
}

export default Questions;