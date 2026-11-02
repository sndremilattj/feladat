import { useState } from 'react';
import { Szinek } from './assets/components/Szinek'

function App() {
  return (
    <>
    <div className='Szinvalaszto'>
      <select name="" id="szinek">
        <Szinek/>
      </select>
    </div>
    </>
  )
}

export default App
