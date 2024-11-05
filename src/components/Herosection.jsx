import React from 'react'
import Dashboard from './dashboard'
import Card from '../pages/Card'

function Herosection({data,d}) {
  return (
    <div>
      <h1>this is herto section</h1>
      <Card data={data} d={d}/>
      <Dashboard data={data} d={d} />
    </div>
  )
}

export default Herosection
