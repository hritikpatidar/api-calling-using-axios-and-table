import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {withRouter} from './WithRouter';

 class App1 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        this.gatvalue=this.gatvalue.bind(this);
    };
    
    
    componentDidMount() {
       this.appdata();
      }

    async appdata(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            //.log(response.data);
            //console.log("phle",teacher);
            //now set the data in teacher hook variable
            //setTeacher(response.data);
            console.log(this.state)
            this.setState({
                data:[...response.data]
            })
            
        } catch (error) {
        //console.error(error);
        
        }
    }

    gatvalue(id){
        console.log("appid",id);
        //console.log()
        
        this.props.navigate('/home1/'+id );
    }

    render() {
        console.log('props',this.props)
        return (
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
                        this.state.data.map((cv,index,arr)=>{
                            //console.log(cv);
                            const id = cv.id
                            return(
                                <tr key={index}>
                                    <td>{cv.userId}</td>
                                    <td>{cv.id}</td>
                                    <td onClick={()=>{ this.gatvalue(id) }}>{cv.title}</td>
                                    <td>{cv.body}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table> 
        )
    }
}

export default withRouter(App1)