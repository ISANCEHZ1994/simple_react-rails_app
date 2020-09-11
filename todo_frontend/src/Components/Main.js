import React from 'react';

const userURL = 'http://localhost:3000/users'
const listURL = 'http://localhost:3000/to_dos'

export default class Main extends React.Component{

    state={
        list: [],
        users: []
    }

    componentDidMount(){
        fetch(userURL)
        .then( resp => resp.json() )
        .then( users => this.setState({
            users: users
        })
        )
        fetch(listURL)
        .then( resp => resp.json() ) 
        .then( todos => this.setState({
            list: todos
        }) )
    }

    // organizingListToUser = () => {
    //     if(list.user_id == user.id){

    //     }
    // }

    render(){
        console.log(this.state.list)
        // fetch()
        return(
            <div>
                <h1 style={{textAlign:'center'}}> Make-A-List</h1>
            {this.state.users.map( user => (
                <div className='user-list'>
                    This is {user.name}'s To Do List
                    
                </div>
            ))}
            </div>
        );

    };

};