import React from 'react'
import { MapContainer, GeoJSON, Marker, Popup, Tooltip } from 'react-leaflet'
import mapData from '../data/countries.json'
import "leaflet/dist/leaflet.css"
import "./WorldMap.css"

function WorldMap() {

    // console.log(mapData);

    const mapStyle = { 
        fillColor: 'black',
        color: '#A7FFE4',
        fillOpacity: 0.2,
        weight: 0.5,
        dashArray: 1
    }

    const onEachCountry = (country, info) => {
        const countryName = country.properties.ADMIN
        const population = '1000'
        console.log(country);
        info.bindPopup(countryName + "Population: " + population)
    }

    return (
        <div className='dark-theme'>
            <h1 className='map-title'>My Map</h1>
            <MapContainer style={{ minHeight: '100vh' }} zoom={3} center={[15, 100]}>
                <GeoJSON data={mapData.features} style={mapStyle} onEachFeature={onEachCountry}/>
                <Marker position={[-36, 171]}>
                    <Popup>Popup for Marker</Popup>
                    <Tooltip>Tooltip for Marker</Tooltip>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default WorldMap
