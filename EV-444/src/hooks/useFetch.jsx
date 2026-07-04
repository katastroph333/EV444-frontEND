import { useState, useEffect } from 'react'

/**
 * Custom hook para realizar peticiones HTTP con fetch.
 * Tiene estados internos: data, loading y error.
 *
 * @param {string} url - URL de la API a consultar
 * @returns {{ data: any, loading: boolean, error: Error | null }}
 */
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) {
      return
    }

    // Reiniciamos los estados cada vez que cambia la URL.
    setLoading(true)
    setError(null)
    setData(null)

    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      try {
        const response = await fetch(url, { signal })

        // Verificamos que la respuesta sea exitosa.
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status} ${response.statusText}`)
        }

        const json = await response.json()
        setData(json)
      } catch (fetchError) {
        // Si la petición fue abortada, no actualizamos el estado.
        if (fetchError.name === 'AbortError') {
          return
        }
        setError(fetchError)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Cleanup: abortar la petición si el componente se desmonta
    // o la URL cambia antes de terminar.
    return () => {
      controller.abort()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
