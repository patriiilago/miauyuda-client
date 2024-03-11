import { Card } from 'react-bootstrap';
import './../../components/PetCard/PetCard.css'

const PetCard = ({
    owner,
    name,
    type,
    breed,
    birth,
    sex,
    weight,
    chipNumber,
    chipOwner
}) => {
    return (
        <Card className="PetCard">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" className="card-img-top" />
            <Card.Body className="PetCardContent">

                <Card.Title>
                    <p>Me llamo {name}</p>
                </Card.Title>

                <Card.Text>
                    <strong>📝 Detalles:</strong> Soy un {type} de raza {breed}
                    <br />
                    <strong>🐣 Fecha de nacimiento: </strong> nací el {birth}
                    <br />
                    <strong>🚹🚺 Sexo: </strong>{sex}
                    <br />
                    <strong>⚖️ Peso: {weight} Kg</strong>
                    <br />
                    <strong>➡️ Número de chip: </strong>{chipNumber}
                    <br />
                    <strong>❤️ Titular del chip: </strong>{chipOwner}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PetCard;
