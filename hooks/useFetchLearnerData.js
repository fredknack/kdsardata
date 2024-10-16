import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchLearnerData(apiUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch data when the hook is first called
  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return { data, loading, error, refetch: fetchData };  // Return the fetchData function as refetch
}
