import React from 'react';
import TodoCard from './TodoCard';
import Form from './Form';

const userURL = 'http://localhost:3000/users'

export default class Main extends React.Component{

    state={
        users: [],
        buttonPress: false,
        name:'',
        title:'',
        item:''
    }

    componentDidMount(){
        fetch(userURL)
        .then( resp => resp.json() )
        .then( users => {
            this.setState({
                users
            })
        })
    };

    handleChange = (e) => { 
        const value = e.target.value
        this.setState({
            ...this.state,
            [e.target.name]: value // note: e.target.name will use the name of the inputs used inside the Form Component
        })
    }
    
    clickButton = () => {
        this.setState({
            buttonPress: !this.state.buttonPress 
        })
    };

    createNewUser = (e) => {
        e.preventDefault()

        const newName = this.state.name
        const newTitle = this.state.title
        const newItem = this.state.item
        
        const data = {
            name: newName,
            to_dos: {
                title: newTitle,
                todo_item: newItem
            } 
        };
        
        fetch(userURL,{
            method: 'POST',
            headers: { // meta-data: is data about data
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data
                // "user":{
                    // name: newName,
                    //     to_dos: {
                    //         title: newTitle,
                    //         todo_item: newItem
                    //     } // closes to_dos
                // } // closes user
            )// closes 
        })
    }

    formContainer = () => {
        if(this.state.buttonPress == true){  // this allows us to show the Form Component
           return(
           <Form
           handleChange={this.handleChange}
           newUser={this.createNewUser}
           name={this.state.name}
           title={this.state.title}
           item={this.state.item}
           />
            ) 
        }
    };

    

    render(){
        const users = this.state.users
    //  users.map( user => console.log(user.to_dos[0].todo_item))
   
        return(
            <div>
                <h1 style={{textAlign:'center'}}> Make A ToDo List </h1>
                    {users.map( card  => {
                    return <TodoCard
                        name={card.name}
                        id={card.id}
                        key={card.id}
                        title={card.to_dos[0].title}
                        userID={card.to_dos[0].user_id}
                        description={card.to_dos[0].todo_item}
                        />
                    })}
                <br></br>
                <button onClick={this.clickButton}> Want to create a list? </button> 
                {this.formContainer()}
            </div>
        );

    };

};