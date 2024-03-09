import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import './../NotFoundPage/NotFoundPage.css'
import error404Photo from './../../images/error404.jpg'


const NotFoundPage = () => {


    return (
        <>

            <div className="NotFoundPage">
                <img className="notfoundimage" src={error404Photo} alt="Gato llorando" />

            </div>
        </>
    )
}
export default NotFoundPage