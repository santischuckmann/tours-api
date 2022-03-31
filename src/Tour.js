import React, { useState, useContext } from 'react';
import { TourContext } from './App'

const Tour = ({id, name, info, image, price}) => {
  const [show, setShow] = useState (false)

  const tourFunction = useContext(TourContext);

  return <article className = "single-tour">
    <img src={image} alt ={name}></img>
    <footer>
      <div className = "tour-info">
        <h4>{name}</h4>
        <h4 className = "tour-price"> $ {price}</h4>
      </div>
      <p>
        {show ? info : `${info.substring(0,200)}...`}
        <button onClick = {() => setShow(!show)}>{show ? "show less" : "read more"}</button>
      </p>
      <button className = "delete-btn" onClick = {() => tourFunction.removeTour(id)}>not interested</button>
      <button className = "add-btn" onClick = {() => tourFunction.addFavorite(id)}>add favorite</button>
    </footer>
  </article>
}

export default Tour;