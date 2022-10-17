const users = []
users.push({ id: '1', name: 'Белгатой' })
users.push({ id: '2', name: 'Шали' })
users.push({ id: '3', name: 'Урус-Мартан' })

const UserCards = () => (
  users.map((user, index) =>
    <div>
      <ol>
        <li key={index} value={user.id}>{user.name}</li>
      </ol>
    </div>
  )
)

export default UserCards;