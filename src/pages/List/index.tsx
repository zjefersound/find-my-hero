import React, { useCallback, useContext, useEffect, useState } from 'react';
import GoBackButton from '../../components/GoBackButton';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import Skeleton from '../../components/Skeleton';
import { QuestionsContext } from '../../contexts/QuestionsContext';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import api from '../../services/api';
import formatDate from '../../utils/formatDate';
import parseToDate, { parseToDateFromInput } from '../../utils/parseToDate';

import { 
  Container, 
  Card, 
  HeroesList,
  Filters
} from './styles';

const List = () => {
  const { data } = useContext(QuestionsContext);
  const [heroes, setHeroes] = useState([]);
  const [visibleHeroes, setVisibleHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [textFilter, setTextFilter] = useState('');
  const forceUpdate = useForceUpdate();

  const handleOrderByDate = useCallback(() => {
    const updatedData = heroes
      .sort((a: any, b: any) => 
        parseToDate(a.modified, 'date') < parseToDate(b.modified, 'date')
          ? -1 
          : parseToDate(a.modified, 'date') > parseToDate(b.modified, 'date')
            ? 1 
            : 0 );
    setVisibleHeroes(updatedData);
    forceUpdate();
  },[visibleHeroes]);

  const handleOrderByName = useCallback(() => {
    const updatedData = heroes
      .sort((a: any, b: any) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    setVisibleHeroes(updatedData);
    forceUpdate();
  },[visibleHeroes]);

  const handleOrderBySeriesAndComics = useCallback(() => {
    const getTotalMovies = (a: any) => a.comics.available + a.series.available;
    const updatedData = heroes
      .sort((a: any,b: any) => getTotalMovies(a) < getTotalMovies(b) ? -1 : getTotalMovies(a) > getTotalMovies(b) ? 1 : 0);
    setVisibleHeroes(updatedData);
    forceUpdate();
  },[visibleHeroes]);

  const getDifferenceBirthDay = (d: string) => {
    const date = parseToDate(d, 'date');
    const birthday = parseToDateFromInput(data.birthday);
    return Math.abs(date.valueOf() - birthday.valueOf());
  }

  const closestDate = (a: any, b: any) => 
    getDifferenceBirthDay(a.modified) < getDifferenceBirthDay(b.modified)
          ? -1 
          : getDifferenceBirthDay(a.modified) > getDifferenceBirthDay(b.modified)
            ? 1 
            : 0;
  
  const containsSearchText = (i: any) => i.name.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase());

  useEffect(() => {

    const nameStartsWith = `nameStartsWith=${data.name.slice(0,1)}`;
    const limit = `limit=10`;
    const orderBy = `orderBy=name`;
    const params = `${nameStartsWith}&${limit}&${orderBy}&`;

    api.get(`/public/characters?${params}apikey=068e82373546f44b111bc6c1566a2b03`)
      .then((res: any) => {
        const filterResults = (i: any) => !Array.isArray(i);
        

        const resHeroes = res.data.data.results;
        setHeroes(resHeroes.filter(filterResults).sort(closestDate));
        setVisibleHeroes(resHeroes.filter(filterResults).sort(closestDate));
      }).finally(() => {
        setIsLoading(false)
      });

  }, []);

  return (
    <Layout>
      <Container>
        <GoBackButton />
        <h1>Here is your hero!</h1>
        {data.name+' - '+formatDate(parseToDateFromInput(data.birthday))}
        <Filters>
          <SearchBar 
            value={textFilter}
            onChange={e => setTextFilter(e.target.value)}
          />

          <span className="label">Order by</span>
          <div className="order-options">
            <button onClick={handleOrderByDate}>Date</button>
            <button onClick={handleOrderByName}>Name</button>
            <button onClick={handleOrderBySeriesAndComics}>Comics and Series</button>
          </div>
        </Filters>
        <HeroesList>
          {isLoading ? (
            <>
              <Skeleton className="block" />
              <Skeleton className="block" />
              <Skeleton className="block" />
              <Skeleton className="block" />
              <Skeleton className="block" />
              <Skeleton className="block" />
            </>
          ) : (
            visibleHeroes.filter(containsSearchText).map((i: any) => ( 
              <Card key={i.id}>
                <br />
                <img src={i.thumbnail.path+'.'+i.thumbnail.extension} alt={`${i.name}`}/>
                <span className="title">
                  {i.name || 'item'}
                </span>
                <div className="line" />
                <span className="info"><strong>Comics:</strong> {i.comics.available}</span>
                <span className="info"><strong>Series:</strong> {i.series.available}</span>
                <span className="info"><strong>Criado em:</strong> {formatDate(parseToDate(i.modified, 'date'))}</span>
              </Card>
            ))
          )}
  
        </HeroesList>
      </Container>
    </Layout>
  );
}

export default List;