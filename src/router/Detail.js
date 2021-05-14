import React, { useEffect } from 'react'
import './Detail.css'

function Detail({ history, location: { state } }) {
  useEffect(() => {
    if (!state) {
      history.push('/')
    }
  }, [history, state])
  if (state) {
    return (
      <div className="detail">
        <h4>Title : {state.title}</h4>
        <div>Year : {state.year}</div>
        <ul>
          Genres :{' '}
          {state.genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <div>Summary : {state.summary}</div>
        <img src={state.poster} alt={state.title} />
      </div>
    )
  } else {
    return null
  }
}

export default Detail
