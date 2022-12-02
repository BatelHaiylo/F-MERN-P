import React, { useContext } from 'react'
import {usersContext} from '../../context/UsersProvider.component'

function UsersData() {
    const {users,setUsers} = useContext(usersContext)
  return (
    <div>
        
    </div>
  )
}

export default UsersData