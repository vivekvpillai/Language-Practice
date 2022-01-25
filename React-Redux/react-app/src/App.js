import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';





function App() {


const [newDeposit, setDeposit] = useState('');
const [newWithdrawal, setWithdrawal] = useState('');
const [newTotal, setTotal] = useState('');

const handleNewAuthor = (event) => {
  setDeposit(event.target.value)
}

const handleTitleChange = (event) => {
  setWithdrawal(event.target.value)
}

const handleNewTotal = (event) => {
 setTotal(event.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
