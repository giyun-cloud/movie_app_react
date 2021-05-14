import React, { useEffect } from 'react'

function Detail({ history, location: { state } }) {
  useEffect(() => {
    if (!state) {
      history.push('/')
    }
  }, [history, state])
  if (state) {
    return <div>{state.title}</div>
  } else {
    return null
  }
}

export default Detail
