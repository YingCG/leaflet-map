import React, { useState } from 'react'
import { MapContainer, GeoJSON } from 'react-leaflet'
//import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import mapData from '../../data/countries.json'
import "leaflet/dist/leaflet.css"
import "./worldMap.css"
import AddStory from '../legend/AddStory'
import Legends from '../legend/Legends'
import LegendOnMap from '../legend/LegendOnMap'

function WorldMap() {
    const [myStories, setMyStories] = useState('')
 

    const changeCountryInfo = (country, info) => {
        const countryName = country.properties.ADMIN
        info.bindPopup(`${countryName}${<LegendOnMap areaInfo={myStories}/>} ${<AddStory/>}`)
    }

    const addMyStory = (newStory) => {
        setMyStories( myStories => [...myStories, newStory])
    }

    return (
        <div className='dark-theme'>
            <MapContainer style={{ minHeight: '100vh' }} zoom={4} center={[-25, 135]}>
                <GeoJSON data={mapData.features} onEachFeature={changeCountryInfo} onClick={addMyStory}/>
            </MapContainer>
        </div>
    )
}

export default WorldMap
