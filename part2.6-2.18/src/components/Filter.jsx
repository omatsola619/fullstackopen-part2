import React from 'react'

function Filter({filter, setFilter}) {
  return (
    <div className="search">
    filter shown with{" "}
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  </div>
  )
}

export default Filter