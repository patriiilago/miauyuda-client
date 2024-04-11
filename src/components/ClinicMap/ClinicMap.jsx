import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useParams } from 'react-router-dom'

function ClinicMap({ coordinates }) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCgCmgUkBCrmjkztK0yqNkzvNNtJjd7mbI"
    })

    const [map, setMap] = useState(null)

    const onLoad = (map) => console.log('mapa')
    const onUnmount = () => setMap(null)

    const clinicCoordinates = { lat: coordinates[1], lng: coordinates[0] }

    return isLoaded && (
        <GoogleMap
            mapContainerStyle={{ height: '500px' }}
            zoom={12}
            onLoad={onLoad}
            center={clinicCoordinates}
            onUnmount={onUnmount}

        >
            <Marker position={clinicCoordinates} />

        </GoogleMap>
    )
}

export default ClinicMap