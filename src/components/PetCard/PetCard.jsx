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
        <Card className="PetCard">
            <Card.Img variant="top" src={image} className="card-img-top" />
            <Card.Body className="PetCardContent">

                <Card.Title>
                    <p>Me llamo {name}</p>
                </Card.Title>

                <Card.Text>
                    <strong>📝 Detalles:</strong> Soy un {type} de raza {breed}
                    <br />
                    <strong>🐣 Fecha de nacimiento: </strong> nací el {format(birth, "long")}
                    <br />
                    <strong>🚹🚺 Sexo: </strong>{sex}
                    <br />
                    <strong>⚖️ Peso:</strong> {weight}<strong> Kg</strong>
                    <br />
                    <strong>➡️ Número de chip: </strong>{chipNumber}
                    <br />
                    <strong>❤️ Titular del chip: </strong>{chipOwner}
                </Card.Text>
                <Button onClick={deletePet} className="deletePetButton">Eliminar Mascota</Button>
                {" "}
                <Link to={`/editpetform/${petId}`}>
                    <Button className='EditPetButton'>Editar Datos</Button>
                </Link>
            </Card.Body>


        </Card>

    );
}

export default PetCard;
