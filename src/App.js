import './App.css';
import Counter from './components/Counter'

const incrementValue = 5;

function App() {
  return (
    <div className="App">
      <Counter incValue={incrementValue}/>
    </div>
  );
}

export default App;
