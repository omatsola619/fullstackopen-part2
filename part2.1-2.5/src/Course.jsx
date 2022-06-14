import React from 'react'

function Course({courses}) {
  return (
    <>
    <h1>{courses[0].name}</h1>
    {courses[0].parts.map((part) => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ))}
    <h3>
      Total of {" "}
      {courses[0].parts.reduce((carry, part) => carry + part.exercises, 0)}{" "}
      exercises
    </h3>
    <h1>{courses[1].name}</h1>
    {courses[1].parts.map((part) => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ))}
    <h3>
      Total of {" "}
      {courses[1].parts.reduce((carry, part) => carry + part.exercises, 0)}{" "}
      exercises
    </h3>
  </>
  )
}

export default Course