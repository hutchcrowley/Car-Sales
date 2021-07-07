import React from 'react'

const CarQuery = () => {
  const car = () => {
    let carquery = new CarQuery()
    carquery.init('2019', 'ford', 'Mustang')
    carquery.setFilters({ sold_in_us: true })
  }

  const handleClick = e => {
    e.preventDefault()
    carquery.populateCarData('car-model-data')
  }

  return (
    <div className='car-query-container'>
      <div className='query-box'>
        <select name='car-years' id='car-years'></select>
      </div>
    </div>
  )
}

export default CarQuery
