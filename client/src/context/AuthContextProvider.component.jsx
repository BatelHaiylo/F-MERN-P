import {createContext,useState,useEffect} from 'react';
import {getAllUsers} from '../service/users-rest';
import {signUp} from '../service/users-rest'

export const authContext = createContext()

export default function AuthContextProvider({children}){
    const [state, setState] = React.useReducer((oldState, newState) => newState, {
        loading: true,
        token: undefined,
        user: null,
       });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        signUp(newUsers).then(res => setUsers(res))
    }
    ,[newUsers])

    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    }

    const updateAuth = async auth => {
        const token = (await auth.getIdToken()) || null;
        if (token !== state.token) {
         setState({
          token,
          loading: false,
          user: await auth.getUser(),
         });
        }
       };
    
    return(
        <authContext.Provider value={{ ...state, updateAuth, isAuthenticated, setIsAuthenticated}}>
            {children}
        </authContext.Provider>
    )
};