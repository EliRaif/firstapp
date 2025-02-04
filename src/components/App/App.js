import logo from '../../logo.svg';
import './App.css';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import Forms from '../Forms/Forms';
import UserCard from '../UserCard/UserCard';
import ItemList from '../ItemList/ItemList';

function App() {
  return (
    <div className="App">

      <header className="App-header">


        {/* <Button  text="Dont Me" className="btn-light"/> */}

        {/* <TextInput/> */}

        {/* <Forms text="Dont Me" className="btn-light"/> */}

        {/* <UserCard id="123456789" name="rivky" age="22" />
        <UserCard id="555888777" name="mendi" age="18" />
        <UserCard id="111222333" name="simcha" age="70" />
        <UserCard id="444555666" name="avi" age="30" />
        <UserCard id="444555666" name="avi" age="30" /> */}

       <ItemList items={["bread", "cheese", "cucumber"]} />

      </header>
    </div>
  );
}

export default App;
