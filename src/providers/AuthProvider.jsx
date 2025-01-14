/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import axios from 'axios'
import useAxiosPublic from '../hooks/useAxiosPublic'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async currentUser => {
  //     console.log('CurrentUser-->', currentUser?.email)
  //     if (currentUser?.email) {
  //       setUser(currentUser)
  //       // save user info in db
  //       await axios.post(
  //         `http://localhost:5000/users/${currentUser?.email}`,
  //         {
  //           name: currentUser?.displayName,
  //           image: currentUser?.photoURL,
  //           email: currentUser?.email,
  //         }
  //       )

  //       // Get JWT token
  //       await axios.post(`http://localhost:5000/jwt`,{ email: currentUser?.email,},{ withCredentials: true })
  //     } else {
  //       setUser(currentUser)
  //       await axios.get(`http://localhost:5000/logout`, {
  //         withCredentials: true,
  //       })
  //     }
  //     setLoading(false)
  //   })
  //   return () => {
  //     return unsubscribe()
  //   }
  // }, [])

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// onAuthStateChange
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    // console.log('CurrentUser-->', currentUser)
    if(currentUser){
      // save user info in db
         axios.post(
          `http://localhost:5000/users/${currentUser?.email}`,{  name: currentUser?.displayName,
            image: currentUser?.photoURL,
            email: currentUser?.email,
          }
        )
      const userInfo ={
        email: currentUser.email
      }
      axiosPublic.post('/jwt',userInfo )
      .then(res=>{
        if(res.data.token){
          localStorage.setItem('access-token', res.data.token);
          setLoading(false)
        }
      })
    }else{
      localStorage.removeItem('access-token')
      setLoading(false)
    }
    
  })
  return () => {
    return unsubscribe()
  }
}, [axiosPublic])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
