import { Card } from 'react-bootstrap'

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>

                <Card.Title>
                    <h1>{name}</h1>
                </Card.Title>

                <Card.Text>
                    <strong>Detalles:</strong> {type}, {breed}
                    <strong>Fecha de nacimiento: </strong>{birth}
                    <strong>Sexo: </strong>{sex}
                    <strong>Peso: {weight} Kg</strong>
                    <strong>Número de chip: </strong>{chipNumber}
                    <strong>Titular del chip: </strong>{chipOwner}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
export default PetCard