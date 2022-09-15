import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [resourceType, setResourceTYpe] = useState('posts')
  console.log('render');
  useEffect (() => {
    /*console.log('onMount');*/
  },[])

  
  return (
    <>
      <div>
      <button onClick = {()=> setResourceTYpe('posts')}>Posts</button>
      <button onClick = {()=> setResourceTYpe('users')}>Users</button>
      <button onClick = {()=> setResourceTYpe('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
