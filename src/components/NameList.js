import react from "react";
import React from "react";
import Person from "./Person";

function NameList(){

   // const names = ['akhi', 'akhile','akhilesh']

   const persons = [
       {
           id : 1,
           name : 'Aki',
           age : 25,
           skill: 'react'
       },
       {
        id : 2,
        name : 'Akiii',
        age : 26,
        skill:  'react'
    },
    {
        id : 3,
        name : 'Aki',
        age : 25,
        skill: 'react'
    },
    {
        id : 4,
        name : 'Aki',
        age : 28,
        skill: 'react'
    }
   ]
   const personList = persons.map(person => (<Person person={person} />))
    return <div>{personList}</div>
    //  const nameList = names.map(name => <h2>{name}</h2>)
  
}

export default NameList