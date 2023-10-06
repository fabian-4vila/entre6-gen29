import axios from "axios"
import { setcredentialSlice } from "../store/slices/credentials.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useAuth = () => {

    const baseURL = 'https://playlist-share-dev.fl0.io'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginUser = (data) => {
        const url = `${baseURL}/api/auth/login`
        axios.post(url, data)
         .then(res => {
            console.log(res.data)
            const token = res.data.token
            const username = res.data.name
            const email = res.data.email
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            localStorage.setItem('email', email)
            const obj = { token, username, email }
            dispatch(setcredentialSlice(obj))
            navigate('/')
         })
         .catch(err => {
            console.log(err)
            dispatch(setcredentialSlice(null))
            localStorage.removeItem('token', token)
            localStorage.removeItem('username', username)
            localStorage.removeItem('email', email)
        })
    }

    const registerUser = (data) => {
        const url =`${baseURL}/api/auth/register`
        axios.post(url, data)
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
    }

    return { loginUser, registerUser }
}

export default useAuth