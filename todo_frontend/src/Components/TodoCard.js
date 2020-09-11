import React from 'react';

export default function TodoCard(props) {
    // console.log(props)
    const { title, description, name  } = props
    return(

        <div>
            <h1> This is {name}'s ToDo List </h1>
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
    )

}