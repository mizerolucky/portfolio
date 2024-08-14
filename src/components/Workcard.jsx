import React from 'react'

const Workcard = ({image, title}) => {
  return (
    <div className='Workcard'>
      <div className='Workcard-img'>
        <img src={image} alt="not found" />
      </div>
      <div className='Workcard-text'>
        <p>{title}</p>
        <button>View</button>
      </div>
    </div>
  )
}
export default Workcard;
