import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQ0MzU3Y2I3OTlmNTg4NmNjMzViYzJjMDVhYzY5YSIsInN1YiI6IjVmOGY0Y2E1YzA0OGE5MDAzOTQwNThhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.711ByiNuTsA5NrEcsU4jzkYlhUfzhkMdinasUdwD4w8
// https://api.themoviedb.org/3/movie/550?api_key=ce44357cb799f5886cc35bc2c05ac69a