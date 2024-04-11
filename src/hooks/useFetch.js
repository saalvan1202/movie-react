import { useEffect, useState } from "react";

//Esto sirve para traer los datos de la API a nuestro proyecto
export default function useFetch(url, options) {
  //Para saber si está caragando
  const [loading, setLoading] = useState(true);
  //Para guardar los resultados
  const [result, setResult] = useState(null);
  //Para que nos genere un error
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
