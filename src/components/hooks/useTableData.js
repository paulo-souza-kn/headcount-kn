// src/components/hooks/useTableData.js
import { useEffect, useState } from 'react';

export const useTableData = (jsonUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o loading
  const [error, setError] = useState(null); // Estado para controlar erros

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error); // Captura erro caso haja
      } finally {
        setLoading(false); // Finaliza o loading
      }
    };

    fetchData();
  }, [jsonUrl]);

  return { data, loading, error }; // Retorna os dados, loading e erro
};
