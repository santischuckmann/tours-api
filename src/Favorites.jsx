import React from 'react';

const Favorites = ({favorites }) => {
  return (
    <section className="favoritesContainer">
      <h3>My favorite tour</h3>
      {favorites.length < 1 ? <h5 style={{margin: "2rem"}}>No favorites yet</h5> : <div className = "favorites">
        {favorites.map((favorite) => {
          return (
          <div key = {favorite.id}>
            <h5> {favorite.name} </h5>
            <img alt = {favorite.name} src = {favorite.image}></img>
          </div>
          )
        })}
      </div>}    
    </section>
  )
}


export default Favorites;