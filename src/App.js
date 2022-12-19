import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './App.css';
import AllRouters from './components/AllRouters';
//import Todo from './components/Todo';

function App() {
  return (
    <div className='App'>
      <Heading>EMPLOYEE APPLICATION FORM APPS</Heading>
      <Link to="/" />
      <AllRouters/>
 
    </div>
  );
}

export default App;
