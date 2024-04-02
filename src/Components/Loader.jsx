import React from 'react'

const Loader = ({loading}) => {
  return (
    <div className= {loading ? "loader" : "" } ></div>
  )
}

export default Loader