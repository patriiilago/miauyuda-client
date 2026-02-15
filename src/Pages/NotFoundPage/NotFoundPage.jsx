import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import './../NotFoundPage/NotFoundPage.css'
import error404Photo from './../../images/error404.jpg'


const NotFoundPage = () => {


    return (
        <div className="notFoundContainer">
            <div className="notFoundContent">
                <h1 className="notFoundTitle">¡Oops! Página no encontrada</h1>
                <p className="notFoundText">
                    La página que estás buscando no existe o fue movida.
                </p>
                <img className="notFoundImage" src={error404Photo} alt="Gato llorando" />
                <div className="notFoundButtonContainer">
                    <Link to="/">
                        <button className="notFoundButton">Volver al inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NotFoundPage