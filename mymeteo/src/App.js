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
  const[nation, setNation] = useState('')
  const handleResearch = (data) => {
    setSearched(data)
  }
  const handleNation = (data) => {
    setNation(data)
  }
  return (
    <BrowserRouter>
    <Container fluid className='App p-0 vh-100'>
      <header>
        <MyMeteoNav handleResearch={handleResearch} handleNation={handleNation}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <>
            <Welcome></Welcome>
            <MyMeteos searched={searched} nation={nation}></MyMeteos>
          </>
        }></Route>
          <Route path='/details/:city/:nation'></Route>
        </Routes>
      </main>
    </Container>
    </BrowserRouter>
  );
}

export default App;
