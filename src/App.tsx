import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import pharLogo from './assets/phar-logo.svg'
import './App.css'

function App() {

  //valor para el campo de busqueda
  const [searchCity, setSearchCity] = useState('')

  const handleSearchByLocation = () => {
    // Get user location
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
    })
    console.log('search by location')
  }

  const handleSearchByCity = () => {
    
    console.log('search by city ', searchCity)
  }

  return (
    <>
      <div className='logo'>
          <img src={pharLogo} className="logo" alt="Buscar Farmacias" />
      </div>
      <h1>Buscar Farmacias</h1>
      
      
      <Button variant="contained" color="primary" onClick={handleSearchByLocation}>Buscar Cerca</Button>

      <h2 className='pinline'><span>tambien puedes</span></h2>

      <TextField id="standard-basic" label="Ciudad" variant="standard" 
        className='input'
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSearchByCity()
          }
        }}
      />
    </>
  )
}

export default App
