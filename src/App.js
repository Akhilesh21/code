// import logo from './logo.svg';
import { PureComponent } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import FocusInput from './components/FocusInput';
// import FragmentDemo from './components/FragmentDemo';
// import FRParentInput from './components/FRParentInput';
// import Greet  from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import GreetProps from './components/GreetProp';
// import Message from './components/Message';
// // import {Greet}  from './components/Greet';
// import Counter from './components/Counter';
// import DeGreet from './components/DeGreet';
// import DeWelcome from './components/DeWelcome';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import ParentComp from './components/ParentComp';
// import PureComp from './components/PureComp';
// import RefsDemo from './components/RefsDemo';
// import Table from './components/Table';

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
    <NameList/>
          <StyleSheet primary={true} />
     <Inline/>
       <h1 className="error">Error</h1>
       <h1 className={styles.success}>Success</h1>
       <Form/>
       <LifecycleA/>
       <FragmentDemo/>
       <Table/>
  <ParentComp/>
  
    <RefsDemo/>
        <FocusInput/>
    <FRParentInput/>

    */}

    <ClickCounter/>
   <HoverCounter/>
 
    
    

      

    </div>
  );
}

export default App;
