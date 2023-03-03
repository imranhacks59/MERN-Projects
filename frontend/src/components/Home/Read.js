import React, { useEffect, useState } from 'react'
import './Home.css'
import { Button, Icon, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Read = () => {
  const navigate = useNavigate();
  const [data,setDatas] = useState([]);
  const fetchData = async ()=>{
     await axios.get(`https://64018b32ab6b7399d0a724e8.mockapi.io/fakedata`)
       .then((response)=>{
        setDatas(response.data)
       })

  }

  useEffect(()=>{
    fetchData();
    console.log(data);
  },[])

  useEffect(()=>{
    
  })

  const setData=(data)=>{
     const {id,firstName,lastName,checkbox} = data;

     localStorage.setItem("ID",id);
     localStorage.setItem("First Name" , firstName);
     localStorage.setItem("Last Name", lastName);
     localStorage.setItem("Checkbox Value",checkbox)
  }
   
  const deleteData=async(id)=>{
    // const filteredData = data.filter((datas)=>(
    //      datas.id != id
    // ))
     await axios.delete(`https://64018b32ab6b7399d0a724e8.mockapi.io/fakedata/${id}`)
     navigate('/')
    // setData(filteredData)
  }
  return (
    <div className='read-main'>
        <Table celled>
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>check</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    
    <Table.Body>
    
    {
        data.map((datas)=>{
           return(
            <Table.Row>
            <Table.Cell>{datas.firstName}</Table.Cell>
            <Table.Cell>{datas.lastName}</Table.Cell>
            <Table.Cell >{datas.checkbox ? 'checked' : 'unchecked'}</Table.Cell>
            <Link to='/update'>
            <Table.Cell><Button onClick={()=>setData(datas)}>Update</Button></Table.Cell>
            </Link>
          
           <Table.Cell><Button onClick={()=>deleteData(datas.id)}>Delete</Button></Table.Cell>
        
          </Table.Row>
           )
        })
    }
     
    </Table.Body>
  </Table>
  <Link to='/create'>
   <Button>Add data</Button>
  </Link>
    </div>
  )
}

export default Read
