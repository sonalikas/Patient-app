import React, { useEffect,useState } from 'react'
import { Table} from 'react-bootstrap'
import axios from 'axios'

function View(){
   
    const fetchApi=async ()=>{
        //let controller = new AbortController()
        //setTimeout(() => controller.abort(), 10000);  // abort after 6 seconds
        try{
            const res = await axios.get("http://localhost:8080/patients")
            console.log(res.data)
            setUser(res.data)

        }catch(error){
            console.log(error.message);
        }
     
    }
    const [user,setUser]=useState([]);

    useEffect(()=>{
      // fetch("http://169.254.13.51/16:8080/patients").then((data)=>{
    fetchApi()  
    },[] )

    return(
        <div>
            <h1>All Patient List</h1>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> ID</th>
      <th> Name</th>
      <th>Status</th>
      <th>Description</th>
    </tr>
    {
          user&&user.map((item,index)=>(
            <tr key={index}>
                <td>{index}</td>
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td>{item.status}</td>
                <td>{item.description}</td>
            </tr>
          ))
        
    }
  </thead>
  <tbody>
    
  </tbody>
</Table>
        </div>
    )
}

export default View;