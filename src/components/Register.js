import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { Header } from "./Header";

export const Register=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        console.log('hii');
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    async function signUp(e){
        e.preventDefault();
        const item={name,email,password};
        console.log(item);
        if(item.name!=="" && item.email!=="" && item.password!==""){
            let result= await fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        });

        result=await result.json();
        console.log("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate('/add');
        }
    }

    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">

            <h1>Sign Up</h1>
            <form onSubmit={signUp}>
            <input type="text" placeholder="Enter your name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>
            <input type="email" placeholder="Enter your email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required /><br/>
            <input type="password" placeholder="Enter your password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required /><br/>
            <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>

        </>
    )
}