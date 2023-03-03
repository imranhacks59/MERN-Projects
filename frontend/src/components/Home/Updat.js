import React, { useEffect, useState } from 'react'
import './Home.css'
import { Button,Checkbox,Form } from 'semantic-ui-react'
import axios from 'axios'
const Update = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] =useState('')
    const [checkbox,setCheckbox] = useState(false);
    const [id,setId] = useState(null)

    useEffect(()=>{

        setId(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkboc Value'));
    },[])

    const updateData  = ()=>{
        axios.put(`https://64018b32ab6b7399d0a724e8.mockapi.io/fakedata/${id}`,{
            firstName,
            lastName,
            checkbox
        })
    }
  return (

    <div  className='add-data-form'>
    < Form >
      <Form.Field>
     <label>First Name</label>
     <input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
     </Form.Field>
     <Form.Field>
     <label>Last Name</label>
     <input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
     </Form.Field>
     <Form.Field>
     <Checkbox label='I agree to the Terms and Conditions' value={id} onClick={()=>setCheckbox(!checkbox)}/>
     </Form.Field>
     <Button type='submit' onClick={updateData}>Update</Button>
     </Form>
     </div>
  )
}

export default Update
