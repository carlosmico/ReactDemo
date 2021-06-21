import './App.css';
import Counter from './components/Counter'
import LifeCycles from './components/LifeCycles'

const incrementValue = 5;


function App() {
      
  
  return (
    <div className="App">
      <Counter incValue={incrementValue} />

      <LifeCycles lifeCycles={["componentDidMount", "componentDidUpdate", "componentWillUnmount"] }/>
    </div>
  );
}

export default App;
