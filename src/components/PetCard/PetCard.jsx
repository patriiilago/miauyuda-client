import { Card, Button, } from 'react-bootstrap';
import './../../components/PetCard/PetCard.css'
import petServices from '../../services/pet.services';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { format } from '@formkit/tempo'

const PetCard = ({
    _id: petId,
    owner,
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

    const deletePet = () => {

        petServices
            .deletePet(petId)
            .then(() => navigate('/clientprofile'))
            .catch(err => console.log(err))
    }

    return (
        <Card className="PetCard h-55">
            <Card.Img variant="top" src={image} className="petImage" />
            <Card.Body className="PetCardContent">

                <Card.Title className='PetTitle'>
                    <h1>Me llamo {name}</h1>
                </Card.Title>

                <Card.Text>
                    <strong>📝 Detalles:</strong> Soy un {type} de raza {breed}
                    <br />
                    <strong>🐣 Fecha de nacimiento: </strong> nací el {format(birth, "long")}
                    <br />
                    <strong>🚹🚺 Sexo: </strong>{sex}
                    <br />
                    <strong>⚖️ Peso: {weight} Kg</strong>
                    <br />
                    <strong>➡️ Número de chip: </strong>{chipNumber}
                    <br />
                    <strong>❤️ Titular del chip: </strong>{chipOwner}
                </Card.Text>
                <div className="PetCardButtonContainer">
                    <Button as={'span'} onClick={deletePet} className="deletePetButton">Eliminar Mascota</Button>{" "}
                    <Link to={`/editpetform/${petId}`}>
                        <Button as={'span'} className='EditPetButton'>Editar Datos</Button>
                    </Link>
                </div>
            </Card.Body>


        </Card>

    );
}

export default PetCard;
