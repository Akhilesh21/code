import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProps from './components/GreetProp';
import Message from './components/Message';
// import {Greet}  from './components/Greet';
import Counter from './components/Counter';
import DeGreet from './components/DeGreet';
import DeWelcome from './components/DeWelcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
     {/* <Greet/>
     <Welcome/>*/}
      {/*<Hello/>*/}

      {/*<GreetProps name="tata" age="10">
      <p>Hello Netwok Service</p>
      </GreetProps>

      <GreetProps name="relince" age="11">
         <button>Click me</button>
      </GreetProps>
    <GreetProps name="Airtel" age="13"/>
      <Message/>
     <Counter/>
    
      <DeGreet name="tata" age="10" />
      
      <DeWelcome name="tata" age="10"/>

      
      <FunctionClick/>
    <ClassClick/>  
    <EventBind/>
     <ParentComponent/>
      <UserGreeting/>
   
    */}
      
    <NameList/>


    </div>
  );
}

export default App;
