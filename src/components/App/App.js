import logo from '../../logo.svg';
import './App.css';
import Button from '../no name/Button/Button';
import TextInput from '../no name/TextInput/TextInput';
import Forms from '../no name/Forms/Forms';
import UserCard from '../no name/UserCard/UserCard';
import ItemList from '../no name/ItemList/ItemList';
import Product from '../no name/Product/Product';
import grandson from '../Hierarchy of children/Grandson/Grandson';
import React ,{useState}from "react";
import Child from '../Hierarchy of children/Child/Child';
import Counter1 from '../Counter1/Counter1';

function App()
 {

  const [count, setCount] = useState(0); 

  return (
    <div className="App">

      <header className="App-header">




<button onClick={() => setCount(count + 1)}>App Increment</button>
<p> App count = {count}</p> 

<Child count={count} setCount={setCount}/>







      </header>

      
        
    </div>
  );
}

export default App;