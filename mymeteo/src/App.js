import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container } from 'react-bootstrap'
import MyMeteoNav from './components/MyMeteoNav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import { useState } from 'react';
import MyMeteos from './components/MyMeteos';

function App() {
  const[searched, setSearched] = useState('')
  const handleChange = (data) => {
    setSearched(data)
  }
  return (
    <BrowserRouter>
    <Container fluid className='App p-0 vh-100'>
      <header>
        <MyMeteoNav handle={handleChange}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <>
            <Welcome></Welcome>
            <MyMeteos searched={searched}></MyMeteos>
          </>
        }></Route>
          <Route path='/details'></Route>
        </Routes>
      </main>
    </Container>
    </BrowserRouter>
  );
}

export default App;
