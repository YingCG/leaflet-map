import React, { useState, useEffect } from 'react';
import Legend from './Legends';
import WorldMap from '../map/WorldMap';
import './legend.css'
import LoadJournal from '../../data/LoadJournal' 

function LegendOnMap() {
  const [areaInfo, setAreaInfo] = useState('')

  const showInfo = () => {
    const loadJournal = new LoadJournal();
    loadJournal.load(setAreaInfo)
  }

  // useEffect(load, [])

  return (
    <div className='map-container'>
      {areaInfo.length === 0 
      ? <div> <h1 className='map-title'>The world is your canvas...</h1> <WorldMap /></div>
      : <div> <WorldMap /> <Legend areaInfo={areaInfo}/></div>}
    </div>
  )
}

export default LegendOnMap