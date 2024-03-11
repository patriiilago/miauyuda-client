// import { GooglePlacesAutocomplete, geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
// import { useEffect, useState } from 'react'

// function NewItemFormClient() {

//     const [clientData, setClientData] = useState({
//         address: undefined,
//         latitude: 0,
//         longitude: 0
//     })

//     const [addressValue, setAdressValue] = useState()

//     useEffect(() => handleAutoComplete(), [addressValue])

//     const handleAutoComplete = () => {
//         addressValue && geocodeByAddress(addressValue?.label)
//             .then(([addressDetails]) => {
//                 setClientData({ ...clientData, address: addressDetails })
//                 return getLatLng(addressDetails)
//             })
//             .then((coordinates) => {
//                 setClientData({ ...clientData, latitude: coordinates.lat, longitude: coordinates.lng })
//             })
//             .catch(error => console.error(error))
//     }

//     return (
//         <form>
//             <h3>Google places Autocomplete</h3>
//             <GooglePlacesAutocomplete
//                 selectProps={{
//                     addressValue,
//                     onChange: setAdressValue,
//                 }}
//                 apiKey="AIzaSyCGaGg3J8IRznrGz8bfd2f5s5uUBL73O6o"
//             />
//         </form>
//     )

// }
// export default NewItemFormClient