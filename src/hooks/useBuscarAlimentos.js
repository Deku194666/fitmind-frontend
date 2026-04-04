


import { useState, useEffect } from 'react';
import axios from 'axios';

export function useBuscarAlimentos(busqueda) {
  const [alimentos, setAlimentos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!busqueda) {
      setAlimentos([]);
      return;
    }

    const fetchAlimentos = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/alimentos/buscar?q=${busqueda}`,
          {
            headers: {
              'user-id': localStorage.getItem('usuario_id')
            }
          }
        );

        setAlimentos(res.data);
      } catch (error) {
        console.error('Error al buscar alimentos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlimentos();
  }, [busqueda]);

  return { alimentos, loading };
}