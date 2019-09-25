import React from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/withLoader'

const UserGrid = ({ users }) => (
  <div className="ed-grid">
    <h2>Usuarios</h2>
    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
      {
        users.map(u => (
          <UserCard
            key={u.id}
            name={u.name}
            username={u.username}
            email={u.email}
          />))
      }
    </div>
  </div>

)

export default withLoader("users")(UserGrid)