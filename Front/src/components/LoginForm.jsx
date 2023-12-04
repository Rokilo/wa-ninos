import styles from "../style"
import { useRef, useState, useEffect, useContext } from "react"
import AuthContext from "../context/AuthProvider"

import axios from "../api/axios"
import { Redirect } from 'react-router';
const LOGIN_URL = '/login'

{/*Cambie la mayoria desde section hacia abajo */}

const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg("")
    }, [user,pwd])

    const handleSumbit = async (e) => {
        
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: user, password: pwd}),
                {
                    headers : { 'Content-Type': 'application/json' }
                }
            );
            
            console.log("Usuario")
            console.log(JSON.stringify(response?.data.user));
            localStorage.setItem("user_id", response?.data.user.user_id);
            localStorage.setItem("username", response?.data.user.username);
            localStorage.setItem("es_admin", response?.data.user.es_admin);
            localStorage.setItem("avatar_img", response?.data.user.avatar_img);
            console.log("Nombre de user")
            setSuccess(true);

        }catch (err){
            console.log(err.response)
            if (!err?.response) {
                setErrMsg('No server Responde')
            } else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 403){
                alert("Datos erroneos")
                //quitar dsp
                localStorage.removeItem("user_id");
                localStorage.removeItem("username");
                localStorage.removeItem("es_admin");
                localStorage.removeItem("avatar_img");
                //
            }
        }
    }

    return(
        <>
        {success ? (
            <Redirect to="/home" />
        ) : (
        <section id="loginform" >
            <div className="bg-white w-1/2 max-w-md bg-opacity-60 px-10 py-20 rounded-3xl border-2 border-gray-200 mx-auto">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-5xl font-semibold ">Bienvenido</h2>
                </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
                <form class="space-y-5" onSubmit={handleSumbit}>
                    <div>
                        <label for="username" class="text-[25px] block text-lg font-medium leading-6 text-gray-900">Usuario</label>
                        <div>
                            <input id="username" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Nombre de Usuario" name="username" type="text"  required class="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
                        </div>
                    </div>
                    <div>
                        <label for="password" class="text-[25px] block text-lg font-medium leading-6 text-gray-900">Clave</label>
                            <input id="password" value={pwd} onChange={(e) => setPwd(e.target.value)} name="password" placeholder="**********" type="password" autocomplete="current-password" required class=" w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
                        <div class="text-sm pt-2">
                            <a href="#" class="font-semibold text-blue-600 hover:text-blue-400">Recuperar Clave</a>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                    <button  class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Ingresar
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
        )}
        </>
    )
}

export default LoginForm