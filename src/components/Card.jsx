import React from 'react'

export default function Card({title1, title2, description}) {
  return (
    <div className='Card-o-about'>
      <p>{title1}</p>
      <div className='line'></div>
      <div className='Card-o-about-describe'>
        <h2>{title2}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
