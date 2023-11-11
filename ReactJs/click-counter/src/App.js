import React, { useState } from 'react'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';

export default function App() {
  const [count, setCount] = useState(1);

  const Inc = () => {
    setCount(count + 1);
    console.log(count);
  }
  const Dec = () => {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div className='App'>
      <h1> {count}</h1>
      <div className='btn'>
        <div className='item'>
          <Button onClick={Inc}><AddIcon htmlColor='#ADEFD1FF' fontSize='large' /></Button>

        </div>
        <div className='item'>
          <Button onClick={Dec}><RemoveIcon htmlColor='#ADEFD1FF' fontSize='large' /></Button>

        </div>
      </div>
    </div>
  )
}
