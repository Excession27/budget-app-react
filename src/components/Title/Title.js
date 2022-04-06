import React from 'react'
import "./Title.css"

const Title = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.toLocaleString('default', { month: 'long' });
  return (
    <h1 className='title__h1'>
        Available Budget {currentMonth} {currentYear}

    </h1>
  )
}

export default Title