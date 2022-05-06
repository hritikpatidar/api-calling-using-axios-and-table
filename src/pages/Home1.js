import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

export default function Home1() {
    //1. state 
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
      getData1();
    },[] );
    const params = useParams()
    //console.log(params.id)
    //2 function defination
    let getData1 = async()=>{
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+params.id+"");
        
        //console.log(response.data)
        //now set the data in teacher hook variable
        setTeacher(response.data);
  
      } catch (error) {
        //console.error(error);
      }
    }
    //console.log("phle",teacher);
    return (
        <>
      {/* <Button variant="primary" onClick={ (e)=>{ getData(e) }}>Click me</Button> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserID</th>
            <th>id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{teacher.userId}</td>
            <td>{teacher.id}</td>
            <td>{teacher.title}</td>
            <td>{teacher.body}</td>
          </tr>
        </tbody>
      </Table>  
    </>
    )
}
