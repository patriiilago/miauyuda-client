import { Card, Button, Row, Col } from 'react-bootstrap';
import './../../components/PetCard/PetCard.css'
import petServices from '../../services/pet.services';
import { useNavigate, Link } from 'react-router-dom';
import { format } from '@formkit/tempo'
import { useContext } from "react"
import { AuthContext } from "./../../context/auth.context"

const PetCard = ({
    _id: petId,
    name,
    type,
    breed,
    birth,
    sex,
    weight,
    chipNumber,
    chipOwner,
    image
}) => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const deletePet = () => {

        petServices
            .deletePet(petId)
            .then(() => navigate('/clientprofile'))
            .catch(err => console.log(err))
    }


    return (

        <Row>
            <div className='nameDiv'>
                <div className='headerPet'>
                    <h2 className='peth2'>Mis Mascotas</h2>
                    <span className='headerPet1'>Aquí puedes consultar todos los datos de tus peluditos</span>
                </div>
                {user.role === 'Client' && (
                    <div className="buttonContPet">
                        <Link className='addPet' to={`/petform`}>Añadir Mascota</Link>
                    </div>
                )}
                {/* <div>
                    <Link className='addPet' to={`/petform`}>Añadir Mascota</Link>
                </div> */}
            </div>
            <Col className='imgPet' md='5'>
                <div className='imgbox'>
                    <img src={image} />
                </div>
            </Col>
            <Col className='petData' md='7'>
                <div className='boxName'>
                    <h3 className='petName'>{name}</h3>
                    <Link className='edit-btn' to={`/editpetform/${petId}`}><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712776511/uetctelrz4l96jfb7cts.png" alt="edit image" /></Link>
                    <Link className='delete-btn' onClick={deletePet}><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712776510/cbzj43pheridmqxlibbc.png" alt="delete image" /></Link>
                </div>
                <span className='spanText'>Soy un {type} de raza {breed}</span>
                <span className='spanText'><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712744774/kkgx9yqxtzcycwt0fh4h.png" alt="owner image" /> Mi dueñ@ es {chipOwner}</span>
                <div className='iconsData'>
                    <span className='spanText'><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743348/ztni2nd0ye9anims1nli.png" alt="weight image" /> {weight} kg</span>
                    <span className='spanText'><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743347/orj1yyfguogbool049kl.png" alt="sex of pet image" /> {sex}</span>
                </div>
                <div className='iconsData'>
                    <span className='spanText'><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743347/ujgxqpy5fdmey2zqbztc.png" alt="birthdate image" /> {format(birth, "long")}</span>
                    <span className='spanText'><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743347/qnqqswnyr94mbfbwppqq.png" alt="chip image" /> {chipNumber}</span>
                </div>
            </Col>
        </Row >
    );
}


export default PetCard;
