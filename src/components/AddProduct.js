import { useState } from 'react'
import {Header} from './Header'

export const AddProduct=()=>{

    const [name,setName]=useState('');
    const [file,setFile]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');

    async function addProduct(){
        console.log(name,file,price,description);
        const formData=new FormData();
        formData.append('file',file)
        formData.append('name',name)
        formData.append('price',price)
        formData.append('description',description)

        let result=await fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            body:formData
        });
        // const res=await result.json();
        console.log(result);
        alert('Added');
    }

    return(
        <>
            <Header/>
            <h1>Add Product</h1>
            <div className='col-sm-6 offset-sm-3'>

            <input type='text' className='form-control' placeholder='Enter name of product' onChange={(e)=>setName(e.target.value)} /><br/>
            <input type='file' className='form-control' placeholder='Attach image of product' onChange={(e)=>setFile(e.target.files[0])} /><br/>
            <input type='text' className='form-control' placeholder='Enter price of product' onChange={(e)=>setPrice(e.target.value)} /><br/>
            <input type='text' className='form-control' placeholder='Write something about the product' onChange={(e)=>setDescription(e.target.value)} /><br/>

            <button onClick={addProduct} className='btn btn-primary'>ADD</button>

            </div>
        </>
    )
}


