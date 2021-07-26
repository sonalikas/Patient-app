import { React, useEffect, useState } from 'react'
import { Button, Table, Form } from 'react-bootstrap'
import axios from 'axios'

function Edit() {
    const [user, setUser] = useState([]);
    const [name, setName]=useState("");
    const [status, setStatus]=useState("");
    const [description, setDescription]=useState("");
    const [id,setId]=useState(null);
   
    useEffect(() => {
        // fetch("http://169.254.13.51/16:8080/patients").then((data)=>{
        fetchApi()
    }, [])

    const fetchApi = async () => {
        //let controller = new AbortController()
        //setTimeout(() => controller.abort(), 10000);  // abort after 6 seconds
        try {
            const res = await axios.get("http://localhost:8080/patients")
            console.log(res.data)
            setUser(res.data)
            setName(res.data[1].name)
            setStatus(res.data[1].status)
            setDescription(res.data[1].description)
            setId(res.data[1].id)

        } catch (error) {
            console.log(error.message);
        }

    }
  function selectPatient(index, itemId){
    alert(`you want to edit Patient Id: ${itemId}`)
    console.warn(user[index]);
    setName(user[index].name)
    setStatus(user[index].status)
    setId(user[index].id)
    }

    function updatePatient(){
        let item ={name,status,description,id};
        fetch(`http://localhost:8080/patient/${id}`, {
            method: 'PUT',
            headers : {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((res) => {
            console.log(res)
            fetchApi()
        })
        alert('updated successfully')
    }

    function deletePatient(id) {
        alert("you want to delete Patient Id: " + id)
        fetch(`http://localhost:8080/patient/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            console.log(res)
            fetchApi()
        })
        alert('deleted successfully')
    }

    return (
        <div>
            <h1> Patient List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> ID</th>
                        <th> Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {
                        user && user.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td> {item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.description}</td>
                                <td><Button onClick={() => selectPatient(index, item.id)}>Edit</Button></td>
                                 <td><Button onClick={() => deletePatient(item.id)}>Delete</Button></td>

                            </tr>
                        ))

                    }
                </thead>
                <tbody>

                </tbody>
            </Table>
            <div style={{backgroundColor:"black", color:"white", padding:'2% 20% 2% 20%'}}>
                
                    <Form>
                    <Form.Group className="mb-3" controlId="id" >
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" value={id} />
                        <Form.Text ></Form.Text>
                    </Form.Group>
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

                    <Button variant="primary" onClick={updatePatient} >
                        Update Patient info
                    </Button>
                </Form>
                
            </div>
        </div>
    )
}

export default Edit;