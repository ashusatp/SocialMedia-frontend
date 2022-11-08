import {useState, useEffect, createContext} from 'react'
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
      setCurrentUser({
        id: 1,
        name: "Ashu",
        profilePic : "https://images.pexels.com/photos/13865998/pexels-photo-13865998.jpeg?cs=srgb&dl=pexels-c%C3%A9line-13865998.jpg&fm=jpg&_gl=1*8i3zrl*_ga*MjkzMDgzMzIzLjE2NjczMTcxOTE.*_ga_8JE65Q40S6*MTY2NzQ3NzQ5MC4zLjEuMTY2NzQ3NzQ5NC4wLjAuMA.."
      });
    }

    useEffect(()=>{
      localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])
    
  return (
    <AuthContext.Provider value={{currentUser,login}}>
      {children}
    </AuthContext.Provider>
  ) 
}

export default AuthContextProvider