import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { withRouter } from './WithRouter';

class Home1 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
        this.appdata1=this.appdata1.bind(this);
    };
    componentDidMount() {
        this.appdata1();
    }

    async appdata1(){
        console.log("id",this.props.params.id);
        const id = this.props.params.id;
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id);
            
            //console.log(response.data)
            //now set the data in teacher hook variable
            this.setState({
                data:response.data
            });
      
          } catch (error) {
            //console.error(error);
          }
    }
    
    render() {
        return (
            
            <Table striped bordered hover>
                {console.log(this.state.id)}
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
                        <td>{this.state.data.userId}</td>
                        <td>{this.state.data.id}</td>
                        <td>{this.state.data.title}</td>
                        <td>{this.state.data.body}</td>
                    </tr>
                </tbody>
            </Table> 
        )
    }
}
export default withRouter(Home1);
