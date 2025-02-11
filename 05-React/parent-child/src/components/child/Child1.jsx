import React from 'react'

function Child1(props) {
  return (
    <div>
      <h1>In Child file, info passed by parent: {props.message}</h1>
    </div>
  )
}

export default Child1
