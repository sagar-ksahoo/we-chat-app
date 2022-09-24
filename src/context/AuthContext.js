import { createContext } from "react" ;
import {auth} from "../firebase";
import {onAuthStateChanged} from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [currUser, setCurrUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            setCurrUser(user);
            console.log(user);
        })
    },[]);

    <AuthContext.Provider value={{currUser}}>
        {children}
    <AuthContext.Provider/>
}