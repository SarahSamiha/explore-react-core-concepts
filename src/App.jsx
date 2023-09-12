import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)
  const actors = ['Sakib', 'Raz', 'Jasim', 'Rubel'];

  const singers = [
    {id: 1, name: 'Dr. Mahmuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Suvra Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]
  return (
    <>
      
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer ={singer}></Singer>)
      }
      <Actor name ={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name ={actor}></Actor>)
      }
      <Todo task = "Learn React" isDone={true}></Todo>
      <Todo task = "Explore Core Concepts"></Todo>
      <Device name='laptop' price = '55'></Device>
      <Device name = "mobile" price = "17"></Device>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      
    </>
  )
}

function Device(props){
  console.log(props);
  return <h2>This Device: {props.name}</h2>
}

function Person(){
  const age = 22;
  return <h3>I am a person of age {age}.</h3>
}

function Student(){
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  )
}

function Developer (){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '8px',
  }
  return (
    <>
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
    </>

  )
}
export default App
