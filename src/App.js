import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProps from './components/GreetProp';
// import {Greet}  from './components/Greet';

function App() {
  return (
    <div className="App">
     {/* <Greet/>
     <Welcome/>*/}
      {/*<Hello/>*/}
      <GreetProps name="tata" age="10">
      <p>Hello Netwok Service</p>
      </GreetProps>

      <GreetProps name="relince" age="11">
         <button>Click me</button>
      </GreetProps>
      <GreetProps name="Airtel" age="13"/>
    </div>
  );
}

export default App;
