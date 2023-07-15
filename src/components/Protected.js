
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Protected=({Cmp})=>{

    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate('/register')
        }
    },[])

    return(
        <>
            <Cmp/>
        </>
    )
}