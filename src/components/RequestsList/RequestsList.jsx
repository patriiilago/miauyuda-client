import { Row, Col } from "react-bootstrap"
import RequestCard from "../RequestCard/RequestCard"


const RequestsList = ({ requests, loadRequests }) => {

    return (
        requests.map(request => <RequestCard key={request._id} {...request} loadRequests={loadRequests} />)
    )
}

export default RequestsList