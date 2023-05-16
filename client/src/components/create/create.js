import React, {useState} from 'react'
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar';

function Create() {
    const navigate = useNavigate();
    const [title, setTitle] =useState("")
    const [description, setDescription] =useState("")

    console.log(title);
    console.log(description);

    const sendData=(e)=>{
        e.preventDefault()
        axios.post(`http://127.0.0.1:8848/notes`,{noteName:title,description:description}).then((response)=>{
            const {data}=response;
            if (response.status ===200){
                console.log("Added record Successfully");
            }
            navigate('/read')
        }).catch((err)=>{
            const { response } = err;
            console.log(response.data.message)
            navigate('/read')
        })
    }
  return (
    <>
    <Navbar/>
    <Form className='form-width'>
        <h3>Create New Note</h3>
    <Form.Field>
      <label>Note Title</label>
      <input name='ntitle' onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input name='ndescription' onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
    </Form.Field>
    <Button type='submit' onClick={sendData}>Submit</Button>
  </Form></>
  )
}

export default Create