import {createContext,useState,useEffect} from 'react';
import {getAllUsers} from '../service/users-rest';
import {signUp} from '../service/users-rest'

export const usersContext = createContext()

export default function UsersProvider({children}){
    const [users,setUsers] = useState([])
    const [newUsers,setNewUsers] = useState({})

    useEffect(()=>{
        signUp(newUsers).then(res => setUsers(res))
        getAllUsers().then(res => setNewUsers(res.users))
    }
    ,[newUsers])
    
    return(
        <usersContext.Provider value={{users,setUsers,newUsers,setNewUsers}}>
            {children}
        </usersContext.Provider>
    )
}