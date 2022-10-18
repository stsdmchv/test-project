import {Button, Card, CardGroup} from "react-bootstrap";
import './userCards.css'
const users = []
users.push({id: '1', firstName: 'Белгатой', lastName: 'Ширехзон'})
users.push({id: '2', firstName: 'Шали', lastName: 'Арми'})
users.push({id: '3', firstName: 'Урус-Мартан', lastName: 'Кур-котан'})
const UserCards = () => (
  users.map((user, index) =>
    <CardGroup >
        <Card className="UserCard">
          <Card.Header>{user.id}</Card.Header>
          <Card.Body>
            <Card.Title key={index}>{user.firstName} {user.lastName}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Delete</Button>
            <Button>Edit</Button>
          </Card.Footer>
        </Card>
    </CardGroup>
  )
)
export default UserCards;