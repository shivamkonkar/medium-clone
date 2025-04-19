import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { SignupInput } from "@shivamkonkar/medium-common/dist"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Auth = ({type}:{type: "signin"|"signup"}) => {

    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    const navigate = useNavigate()

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}api/v1/user/${type==="signin"?"signin":"signup"}`, postInputs)
            if(response.status === 200){
                const jwt = response.data.jwt
                localStorage.setItem("token",jwt)
                navigate("/blog")
            }
            else{
                alert("Invalid details")
            }
        }
        catch(err){
            alert(err)
        }
    }

    return <div className="h-screen flex justify-center flex-col items-center px-4">
        <div className="flex justify-center  w-full max-w-md">
            <div className="w-full" >
                <div className="text-3xl font-extrabold text-center ">
                    Create an account
                </div>
                
                <div className="text-slate-400 text-center">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?" } 
                    <Link to={type==="signin"?"/signup":"/signin"} className="ml-2.5 underline" >{type==="signin"?"Sign Up":"Login"}</Link>
                </div>
                
                <div className="mt-4 ">
                    {type==="signup"?<LabelledInput label="name" placeholder="Enter your name" onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            name: e.target.value
                        }))
                    }} />:null}
                    
                    <LabelledInput label="email" placeholder="Enter your email" onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput type="password" label="password" placeholder="Enter your password" onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                </div>
                <div className="text-center">
                <button
                    onClick={sendRequest}
                    type="button"
                    className="mt-7 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-full"
                    >
                    Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType{
    label:string,
    placeholder:string,
    type?:string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput ({ label, type, placeholder, onChange}: LabelledInputType){
    return <div className="py-2">
        <label className="block mb-2 text-sm font-bold text-gray-900">
            {label}
        </label>
        <input
        onChange={onChange}
        type= {type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        />
  </div>
  
}