import React from 'react';



export default function Form(props){

    // const [state, setState] = React.useState({
    //     name: "",
    //     title: "",
    //     item:""
    //   });

    // function handleChange(e) {
    //     const value = e.target.value;
    //     setState({
    //       ...state,
    //       [e.target.name]: value
    //     });
    //   };
    //   console.log(state.name)

    return(
        <form onSubmit={(e) => props.newUser(e)}>
                <label> Name:
                    <input type="text" name="name" vaule={props.name} onChange={(e) => props.handleChange(e)}/>
                </label>
                <label> Title of ToDo:
                    <input type='text' name='title' vaule={props.title} onChange={(e) => props.handleChange(e)}/>
                </label> 
                <label> ToDo Item:
                    <input type='text' name='item' vaule={props.item} onChange={(e) => props.handleChange(e)}/>
                </label>
                <button type='submit' value='submit' placeholder='Create New ToDo!'> Create New To Do!</button>
                {/* <input type='submit' placeholder='Create New ToDo!'/> */}
        </form>
    )
};