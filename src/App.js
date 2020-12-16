import './App.css';
import Person from './Person/Person'


import React, { Component, createElement, useState } from 'react'
import Form from './Form/Form';
import NameForm from './Form/NameForm';
import Solution from './Form/Solution';
import HookMethod from './Form/HookMethod';

const App = props => {
     const [personsState, setPersons] = useState({
                persons:[
                    {name:'Ely', age:25},
                    {name:'Raul', age :23},
                    {name:'Cris', age:25}
                ],

                otherState: 'some other value'
            })

          
           const switchNameHandler = () =>{
                  
                    setPersons(
                        {persons:[
                        {name:'Elena', age:25},
                        {name:'Raul', age :23},
                        {name:'Cris', age:25}
                    ]
                })
            }
            
        return ( 
            <div className = 'App' >
                {/* <Solution /> */}
             
                <h1 > Hello !!!!! </h1> 
                   <HookMethod />
                {/* <button onClick={switchNameHandler}>Switch name</button> */}
               
                {/*  this- refers to the class, on our class we have a state property
                {/* name = {'Maria} (props.name-din)*/}
                {/* <Form /> */}
                {/* <Person name = {personsState.persons[0].name} age={personsState.persons[0].age}/>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Racing</Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> */} 
            </div>
        )
       // return React.createElement('div', null, React.createElement('h1',null, 'hello'))

 }
export default App;

