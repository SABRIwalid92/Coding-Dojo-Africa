import React, { useState } from 'react'

const PersonCard = (props) => {
  const {firstName,lastName,age,hairColor} = props.person
  const [personAge,setPersonAge]=useState(age)
  const birthdayFn = () => {setPersonAge(personAge + 1)}
  return (
    <div>
        <h1>{lastName + ", " + firstName}</h1>
        <p>Age: {personAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={birthdayFn}>Happy Birthday 🎂 !!!</button>

    </div>
  )
}

export default PersonCard