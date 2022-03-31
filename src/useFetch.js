import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getTours = async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTours(json)
    setLoading(false)
  }

  useEffect(() => {
    getTours()
  }, [url])
  return { loading , tours }
};
