import React, { useState } from 'react'
import {Button,Form} from 'react-bootstrap'

function Add(){

    const [name,setName]=useState("");
    const [status,setStatus]=useState("");
    const[description,setDescription]=useState("");
    function savePatient()
    {
        console.warn({name,status,description});
        let data={name,status,description}
        fetch("http://localhost:8080/patient",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            alert('added successfully')        
        })
        
    }
    return(
        <div>

<h1><u> Add Patient</u></h1>
        

        <div style={{margin:'2% 20% 2% 20% '}}>
        <Form>
                    <Form.Group className="mb-3" controlId="name" onChange={(e)=>setName(e.target.value)}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} />
                        <Form.Text ></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status" onChange={(e)=>setStatus(e.target.value)}>
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" value={status} />
                        <Form.Text ></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description" onChange={(e)=>setDescription(e.target.value)}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={description} />
                        <Form.Text ></Form.Text>
                    </Form.Group>

                    <Button variant="primary" onClick={savePatient} >
                        Add Patient info
                    </Button>
                    <h6></h6>
                </Form>
                </div>   
        </div>



    )
}

export default Add;