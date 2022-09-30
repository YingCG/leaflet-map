import React, { useState } from 'react'
import { MapContainer, GeoJSON } from 'react-leaflet'
//import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import mapData from '../../data/countries.json'
import "leaflet/dist/leaflet.css"
import "./worldMap.css"

function WorldMap({areaInfo}) {

    //console.log(areaInfo);

    const mapStyle = { 
        fillColor: 'black',
        color: '#1CD6CE',
        fillOpacity: 0.2,
        weight: 1,
        dashArray: 1
    }
    


    const changeCountryInfo = (country, info) => {
        const countryName = country.properties.ADMIN
        const areaInfo = country.properties.areaInfo
        info.bindPopup(`${countryName} ${areaInfo}`)
    }


    return (
        <div className='dark-theme'>
            <MapContainer style={{ minHeight: '100vh' }} zoom={3} center={[15, 100]}>
                {/* <GeoJSON data={areaInfo} style={mapStyle} onEachFeature={changeCountryInfo}/> */}
                <GeoJSON data={mapData.features} style={mapStyle} onEachFeature={changeCountryInfo}/>
            </MapContainer>
        </div>
    )
}

export default WorldMap
