import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';


import './App.css'
import Button from './components/Button/Button'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

function App() {
  return (
    <div>
      <h1>
        Welcome to our Blog app
      </h1>
      <Button label="Create a post" onClick={() => {}} />
    </div>
  )
}

export default App
