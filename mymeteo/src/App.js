import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container } from 'react-bootstrap'
import MyMeteoNav from './components/MyMeteoNav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import { useState } from 'react';
import MyMeteoDefault from './components/MyMeteoDefault';
import WeeklyMeteo from './components/WeeklyMeteo';
import NotFound from './components/NotFound';

function App() {
  const[searched, setSearched] = useState('')
  const[nation, setNation] = useState('')
  const[id, setId] = useState('')
  const handleResearch = (data) => {
    setSearched(data)
  }
  const handleNation = (data) => {
    setNation(data)
  }
  const handleId = (data) => {
    setId(data)
  }
  console.log(nation)
  return (
    <BrowserRouter>
    <Container fluid className='App p-0 vh-100'>
      <header>
        <MyMeteoNav handleResearch={handleResearch} handleNation={handleNation} id={id}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <>
            <Welcome></Welcome>
            <MyMeteoDefault searched={searched} nation={nation} handleId={handleId}></MyMeteoDefault>
          </>
        }></Route>
          <Route path='/details/:city' element={<WeeklyMeteo handleResearch={handleResearch} handleNation={handleNation}/>}></Route>
          <Route path='*' element={<NotFound handleResearch={handleResearch} handleNation={handleNation}/>}></Route>
        </Routes>
      </main>
    </Container>
    </BrowserRouter>
  );
}

export default App;
