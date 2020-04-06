import React from 'react';
import './App.css';
import StartSession from './StartSession';
import Usuario from './Usuario';
import Gallery from './Gallery';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <StartSession />
        <Usuario />
        <Gallery />
      </Container>
    </div>
  );
}

export default App;
