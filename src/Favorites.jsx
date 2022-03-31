import React from 'react';

const Favorites = ({favorites }) => {
  return (
    <section>
      <h3>{favorites.length !== 1 ? `${favorites.length} favorite places` : `${favorites.length} favorite place` } </h3>
      <div className = "favoritesSection">
        {favorites.map((favorite) => {
          return (
          <div key = {favorite.id}>
          <h5> {favorite.name} </h5>
          <img alt = {favorite.name} src = {favorite.image}></img>
          </div>
          )
        })}
      </div>
    </section>
  )
}

const Favorite = () => {}

export default Favorites;