import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

import Favorites from './Favorites'

// ya hice que addFavorite contenga lo anterior y además añada, ahora
// tengo que hacer que las dos entren dentro del context

const url = 'https://course-api.com/react-tours-project';
export const TourContext = React.createContext();

function App () {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState ([])
  const [favorites, setFavorites] = useState ([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours (newTours)
  }

  const addFavorite = (id) => {
    const newFavorites = tours.filter((tour) => tour.id === id)
    if (favorites <= 1) {
    setFavorites (newFavorites)
    } else {
      setFavorites ([...favorites, newFavorites])    
    }
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

    
  }

  useEffect (() => {
    console.log(favorites)
    console.log(tours)
  }, [favorites])

  useEffect (() => {
    document.title = `${tours.length === 0 ? "No" : tours.length} Tours Left!`
  },)

  useEffect (() => {
    fetchTours()
  }, [])

  if (loading) {
    return <main>
      <Loading />
    </main>
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left 😅</h2>
          <button className = "btn" onClick = {() => fetchTours()}>Refresh tours</button>
        </div>
      </main>
    )
  }

  return (
    <TourContext.Provider value = {{removeTour, addFavorite}}>
      <main>
        <Favorites favorites = {favorites} />
        <Tours tours = {tours} />
      </main>
    </TourContext.Provider>
    )
}

// removeTour = {removeTour, tours} va en Tours component



export default App;