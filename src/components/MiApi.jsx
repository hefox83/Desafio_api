import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./Buscador";


const MiApi = () =>{
    const [ adopcionApi, setAdopcionApi ] = useState([]);
    const [adopcionFiltrados, setadopcionFiltrados] = useState([]);
    const url = "https://huachitos.cl/api/animales"
    
    const animales = async () => {
            const data = await fetch(url);
            const result = await data.json();
            
    
    const sortData = result.data.sort((a, b) =>  a.comuna.localeCompare(b.comuna));
        setAdopcionApi(sortData)
        setadopcionFiltrados(sortData)
    }
    useEffect(() => {
        animales()
    }, [])

    return (

        <div>
            
                <Buscador className="buscaodr" adopcionApi={adopcionApi} setadopcionFiltrados={setadopcionFiltrados} />
            
            <Row xs={1} md={3} className="g-6">
                {adopcionFiltrados.map((adopcion, id) => {
                    return (
                        <Col key={id}>
                            <Card className="card" style={{ width: '18rem' }}>
                                <Card.Header><h3>{adopcion.nombre}</h3></Card.Header>
                                <Card.Img variant="top" src={adopcion.imagen} href={adopcion.url} />
                                <Card.Body >
                                    <Card.Title>Estoy en {adopcion.estado} en la comuna de {adopcion.comuna} de la region {adopcion.region}</Card.Title>
                                    <Card.Text>Tengo {adopcion.vacunas} vacuna</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Edad {adopcion.edad}</ListGroup.Item>
                                    <ListGroup.Item>{adopcion.genero}</ListGroup.Item>
                                </ListGroup>
                                <Button href={adopcion.url} variant="primary">Ayudame </Button>

                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )}




export default MiApi