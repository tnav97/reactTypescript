import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet/greet';
import Person from './components/Person/Person';
import PersonList from './components/PersonList/PersonList';
import Status from './components/Status/Status';
import Heading from './components/Heading/Heading';
import Oscar from './components/Oscar/Oscar';
import Button from './components/Button/Button';

function App() {
const personName ={
  first: 'Bruce',
  last : 'Lee'
}
const persons =[{
  first: 'Bruce',
  last : 'wayne'
},
{
  first: 'prince',
  last : 'clark'
},
{
  first: 'mark',
  last : 'gabb'
}]

  return (
    <div className="App">
<Greet name="naveen" messageCount={56}></Greet>
<Person name={personName}></Person>
<PersonList names={persons}></PersonList>
<Status status='error'></Status>
<Oscar>
<Heading>placeholder data</Heading>
</Oscar>
<Button handleClick={()=>{
  console.log('Button Clicked');
}}></Button>
    </div>
  );
}

export default App;
