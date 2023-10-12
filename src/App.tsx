import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import pharLogo from './assets/phar-logo.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='logo'>
          <img src={pharLogo} className="logo" alt="Buscar Farmacias" />
      </div>
      <h1>Buscar Farmacias</h1>
      
      
      <Button variant="contained">Buscar Cerca</Button>

      <h2 className='pinline'><span>tambien puedes</span></h2>

      <TextField id="standard-basic" label="Ciudad" variant="standard" />
    </>
  )
}

export default App
