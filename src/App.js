import React, { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'


const App = () => {

  const usersData = [
    { id: 1, name: 'tania', username: 'floppy' },
    { id: 2, name: 'cinta', username: 'cinta' },
    { id: 3, name: 'baruk', username: 'baruk' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser ] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
          <h2>Edit user</h2>
          <EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
        </div>

        <div className="flex-large">
          <h2>View user</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
