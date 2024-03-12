import { useEffect, useState } from "react"
import requestServices from "../../services/request.services"
import RequestCard from "../RequestCard/RequestCard"

const RequestsList = ({ clientId }) => {

    const [requests, setRequests] = useState([])

    useEffect(() => getAllClientRequests(), [])

    const getAllClientRequests = () => {
        requestServices
            .getAllClientRequests(clientId)
            .then(({ data }) => setRequests(data))
            .catch(err => console.log(err))
    }

    return (
        requests.map(request => <RequestCard key={request._id} {...request} />)
    )
}

export default RequestsList