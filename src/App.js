import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom"
const axios = require('axios').default;
function App() {
  //1. state 
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate()
  

  //2. function defination
  let getData =async()=>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      //.log(response.data);
      //console.log("phle",teacher);
      //now set the data in teacher hook variable
      setTeacher(response.data);

    } catch (error) {
      //console.error(error);
    }
  }

  let gettitle=(id)=>{
    //console.log(id);
    navigate("/home/"+id+"")
  }

  
  //console.log('bad me',teacher);


  //3. return statement /jsx
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
          {
            teacher.map((cv,index,arr)=>{
              //console.log("cv",cv)
              //console.log(arr[index].userID)
              const id = cv.id
              return(
                <tr key={index}>
                  <td>{cv.userId}</td>
                  <td>{cv.id}</td>
                  <td onClick={()=>{ gettitle(id)}}>{cv.title}</td>
                  <td>{cv.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>  
    </>
  );
}

export default App;
