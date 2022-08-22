import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { FirebaseAuth } from "../firebase/firebase-config";


export const useCheckingAuth = (setIsAuthenticated) => {
    useEffect(() => {

        onAuthStateChanged( FirebaseAuth , async ( user ) =>{
          if(user){
            setIsAuthenticated(true)
          }
            else{
                setIsAuthenticated(false)
                }
        });
      }, [])
}