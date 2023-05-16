import React, {useEffect, useState} from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Read() {
const [dataCollection, setDataCollection]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8848/notes`).then((getData)=>{
            // console.log(getData.data.data)
            setDataCollection(getData.data.data)
        })
    })

    const setId =(id,title, description)=>{
        console.log(description)
        localStorage.setItem('ID',id)
        localStorage.setItem('title',title)
        localStorage.setItem('description',description)
    }

const getData=()=>{
    axios.get(`http://127.0.0.1:8848/notes`).then((getData)=>{
        // console.log(getData.data.data)
        setDataCollection(getData.data.data)
    })
}

const onDelete =(id)=>{
axios.delete(`http://127.0.0.1:8848/notes/${id}`).then(()=>{
    getData();
})
}

  return (
    <>
    <Navbar/>
    <h3>Note List</h3>
    <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Note Title</Table.HeaderCell>
        <Table.HeaderCell>Note Description</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {dataCollection.map((data,i)=>{
        return(
            <Table.Row>
              <Table.Cell>{i+1}</Table.Cell>
              <Table.Cell>{data.noteName}</Table.Cell>
              <Table.Cell>{data.description}</Table.Cell>

              <Table.Cell> <Link to="/update"><Button color='blue' onClick={()=>setId(data.id, data.noteName,data.description)}> Update</Button></Link></Table.Cell>
              <Table.Cell>
                {/* <Link to ="/delete"> */}
                    <Button color='red' onClick={()=>onDelete(data.id)}>Delete</Button>
                    {/* </Link> */}
                    </Table.Cell>
            </Table.Row>     
        )
    })}
    
    </Table.Body>
  </Table></>
  )
}

export default Read