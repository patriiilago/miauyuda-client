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
            <div className='boxName'>
                <h2 className='headerPet'>Mis Mascotas</h2>
                <p className='headerPet1'>Aquí puedes consultar todos los datos de tus peluditos</p>
                <Link className='addPet'>Añadir Mascota</Link>
            </div>
            <Col md='5'>
                <img className='petImage' src={image} />
            </Col>
            <Col className='petData' md='7'>
                <div className='boxName'>
                    <h3 className='petName'>{name}</h3>
                    <Link className='edit-pet'>Editar</Link>
                </div>

                <span className='breedText'>Soy un {type} de raza {breed}</span>
                <span><img src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712744774/kkgx9yqxtzcycwt0fh4h.png" alt="owner image" /> Mi dueñ@ es {chipOwner}</span>

                <div className='iconsData'>
                    <span><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743348/ztni2nd0ye9anims1nli.png" alt="weight image" /> {weight} kg</span>
                    <span><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743347/orj1yyfguogbool049kl.png" alt="sex of pet image" /> {sex}</span>
                </div>
                <div className='iconsData'>
                    <span><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743347/ujgxqpy5fdmey2zqbztc.png" alt="birthdate image" /> {format(birth, "long")}</span>
                    <span><img className='icons' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712743347/qnqqswnyr94mbfbwppqq.png" alt="chip image" /> {chipNumber}</span>
                </div>
            </Col>
        </Row >
    );
}

export default PetCard;
