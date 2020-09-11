import React from 'react';
import TodoCard from './TodoCard';

// const userURL = 'http://localhost:3000/users'
const listURL = 'http://localhost:3000/to_dos'

export default class Main extends React.Component{

    state={
        list: [],
        buttonPress: false
    }

    componentDidMount(){
        fetch(listURL)
        .then( resp => resp.json() )
        .then( todo => {
            this.setState({
                list: todo
            })
        })
    };

    creatingNewTodo = () => {
        
    };

    clickButton = () => {
        this.setState({
            buttonPress: !this.state.buttonPress
        })
    };

    formContainer = () => {
        if(this.state.buttonPress == true){
           return(
           <div>
               <form>
                <label> Name:
                    <input type="text" name="name" />
                </label>
                <label> Title of ToDo:
                    <input type='text' name='title'/>
                </label>
                <label> ToDo Item:
                    <input type='text' name='todo-item'/>
                </label>

                <button type='submit'> Create ToDo! </button>
               </form>
            </div>
            ) 
        }
    };

    render(){
        const list = this.state.list
       list.map( todo => console.log(todo))
        return(
            
            <div>
                    <h1 style={{textAlign:'center'}}> Make A ToDo List </h1>
                {list.map( card  => {
                   return <TodoCard
                    name={card.user.name}
                    id={card.id}
                    key={card.id}
                    title={card.title}
                    userID={card.user_id}
                    description={card.todo_item}
                    />
                })}
                <br></br>
                <button onClick={this.clickButton}> Want to create a list? </button> 
                {this.formContainer()}
            </div>
        );

    };

};