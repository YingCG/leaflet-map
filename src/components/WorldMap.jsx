import React, { useState } from 'react'
import { MapContainer, GeoJSON, Marker, Popup, Tooltip } from 'react-leaflet'
import mapData from '../data/countries.json'
import "leaflet/dist/leaflet.css"
import "./WorldMap.css"

function WorldMap() {
    const [message, setMessage] = useState()

    // console.log(mapData);

    const mapStyle = { 
        fillColor: 'black',
        color: '#F07DEA',
        // color: '#A7FFE4',
        fillOpacity: 0.2,
        weight: 1,
        dashArray: 1
    }

    // const showMessage = (event) => {
    //     event.target.value = setMessage(
    //         {idea: 'new idea!'}
    //     )
    // }

    const changeCountryInfo = (country, info) => {
        const countryName = country.properties.ADMIN
        console.log(country);
        info.bindPopup(countryName)

        info.on({
            // click: (event) => {console.log(idea)},
            click: (event) => {
                const info = event.target.setMessage(
                    'new idea!'
                    )
                    info.bindPopup(info)
            },
            // mouseover:  (event) => {
            //     event.target.setStyle({
            //         fillColor : '#CDF0EA',
            //         fillOpacity: 0.2,
            //         idea: 'What are you thinking?'
            //     })
            //     console.log('i can relate!')
            // }
        })
    }


    return (
        <div className='dark-theme'>
            <h1 className='map-title'>My Map</h1>
            <MapContainer style={{ minHeight: '100vh' }} zoom={3} center={[15, 100]}>
                <GeoJSON data={mapData.features} style={mapStyle} changeCountryInfo={changeCountryInfo}/>
            </MapContainer>
        </div>
    )
}

export default WorldMap
