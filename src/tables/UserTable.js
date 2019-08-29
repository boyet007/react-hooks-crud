import React from 'react'

const UserTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                        <td>{ user.name }</td>
                        <td>{ user.username }</td>
                        <td>
                            <button onClick={() => {props.editRow(user)}}>Edit</button>
                            <button onClick={() => props.deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colspan={3}>No USers</td>
                    </tr>
                )}
               
            </tbody>
        </table>
    )
}

export default UserTable