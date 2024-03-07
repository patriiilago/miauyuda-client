import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import './../NotFoundPage/NotFoundPage.css'

const img = 'https://ih1.redbubble.net/image.492975046.7150/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg'

const NotFoundPage = () => {


    return (
        <>

            <div className="NotFoundPage">
                <img className="notfoundimage" src={img} alt="Gato llorando" />
                <Link to={"/"}>
                    <Button
                        className="btn btn-dark"
                        size="sg"
                    >
                        Volver a Inicio
                    </Button>
                </Link>
            </div>
        </>
    )
}
export default NotFoundPage