import RequestCard from "../RequestCard/RequestCard"
import './RequestList.css'


const RequestsList = ({ requests, loadRequests }) => {

    return (
        requests.map(request => <RequestCard key={request._id} {...request} loadRequests={loadRequests} />)
    )
}

export default RequestsList