import { useState, useEffect } from 'react'

/**
 * Custom hook para sincronizar estado de React con localStorage.
 * Lee el valor inicial desde localStorage y lo guarda cada vez que cambia.
 *
 * @param {string} key - Clave para localStorage
 * @param {any} initialValue - Valor inicial si no existe en localStorage
 * @returns {[any, function]} - Array similar a useState: [value, setValue]
 */
function useLocalStorage(key, initialValue) {
  // Crear estado con el valor inicial de localStorage o el valor por defecto
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Intentar obtener el valor de localStorage
      const item = window.localStorage.getItem(key)
      
      // Si existe, parsearlo; si no, usar el valor inicial
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Si hay error (localStorage no disponible, JSON inválido), usar valor inicial
      console.error(`Error leyendo localStorage para la clave "${key}":`, error)
      return initialValue
    }
  })

  // Efecto secundario: guardar en localStorage cada vez que storedValue cambia
  useEffect(() => {
    try {
      // Guardar en localStorage como JSON string
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      // Si hay error al guardar, loguear el error
      console.error(`Error guardando en localStorage para la clave "${key}":`, error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
