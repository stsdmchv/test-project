import {Card} from "react-bootstrap";
import './userCards.css'

const users = []
users.push({ id: '1', firstName: 'Белгатой', lastName:'Ширехзон' })
users.push({ id: '2', firstName: 'Шали', lastName:'Арми' })
users.push({ id: '3', firstName: 'Урус-Мартан', lastName:'Кур-котан' })

const UserCards = () => (
  users.map((user, index) =>
    <div className="Body">
      <div className="UserCard">
        <Card>{user.id} <br /> {user.firstName} {user.lastName}</Card>
      </div>
    </div>
  )
)

export default UserCards;