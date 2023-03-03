import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './Home.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate();
 const [firstName,setFirstName] = useState('');
 const [lastName,setLastName] =useState('')
 const [checkbox,setCheckbox] = useState(false);

//  const postData= async ()=>{
//     const data  = await axios.post(`https://64018b32ab6b7399d0a724e8.mockapi.io/fakedata`)
//  }
      const createData= async()=>{
       console.log(firstName)
       console.log(lastName)
       console.log(checkbox)
       const data  = await axios.post(`https://64018b32ab6b7399d0a724e8.mockapi.io/fakedata`,{firstName,lastName,checkbox})
       navigate('/')
     }

     useEffect(()=>{
     
     })
  return(
       <div  className='add-data-form'>
        <Link to='/'>
        <Button>
            Back
       </Button>
       </Link>
         <Form onSubmit={createData} >
     <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onClick={()=>setCheckbox(!checkbox)}/>
    </Form.Field>
    <Button type='submit'>Create</Button>
  </Form>

  
       </div>
  )
 
}

export default Create