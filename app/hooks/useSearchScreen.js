import {useState, useEffect} from 'react';
import api from '../api/api';

export default () => {
  const [resulttt, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const callApiSearch = async (search) => {
    try {
      const response = await api.get('/search', {
        params: {
          limit: 50,
          term: search,
          location: 'san jose',
        },
      });
      setResult(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    callApiSearch('');
  }, []);

  return [callApiSearch, errorMessage, resulttt];
};
