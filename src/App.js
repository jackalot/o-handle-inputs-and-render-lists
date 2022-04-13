import logo from './logo.svg';
import './App.css';
import OrderedList from './components/OrderedList';
import Prompt from './components/Prompt';
function App() {
  return (
    <div className="App">
      <OrderedList></OrderedList>
      <Prompt></Prompt>
    </div>
  );
}

export default App;
