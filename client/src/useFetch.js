import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, [url]);

  return [data, error];
};

export default useFetch;
