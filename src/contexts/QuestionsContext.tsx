import React, { createContext, FormEvent, useCallback, useState } from "react";

interface DataProps {
  name: string;
  birthday: string;
  seriesOrComics: string;
}

interface QuestionsProps {
  data: DataProps; 
  handleInputChange: (event: FormEvent<HTMLInputElement>) => void;
}

const QuestionsContext = createContext<QuestionsProps>({} as QuestionsProps);

const dataInitialProps = {
  name: '',
  birthday: '',
  seriesOrComics: ''
}
const QuestionsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataProps>(dataInitialProps);

  const handleInputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setData({ ...data, [name]: value });
  }, [data]);
  
  const values = {
    data,
    handleInputChange
  }

  return (
    <QuestionsContext.Provider value={values}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsProvider };