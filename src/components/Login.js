
import { useNavigate } from 'react-router-dom';
import {Header} from './Header'
import { useEffect, useState } from 'react';

export const Login=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    

    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])

    async function login(){
        // console.log({email,password});
        // console.log(email,password);
        const data={email,password};

        let result=await fetch('',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        result=await result.json();
        localStorage.setItem('user-info',JSON.stringify(result));
        navigate('/add')
    }

    return(
        <>
        <Header />
            <h1>Login Page</h1>
            <div className='col-sm-6 offset-sm-3'>
                <input type='email' className='form-control' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} /><br/>
                <input type='password' className='form-control' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} /><br/>
                <button onClick={login} className='btn btn-primary'>Login</button>
            </div>

        </>
    )
}