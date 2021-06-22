import './App.css';
import Counter from './components/Counter'
import LifeCycles from './components/LifeCycles'
import BindEvents from './components/BindEvents'
import RenderingConditional from './components/RenderingConditional'
import NameForm from './components/NameForm'


const incrementValue = 5;


function App() {
      
  
  return (
    <div className="App">
      <Counter incValue={incrementValue} />

      <LifeCycles lifeCycles={["componentDidMount", "componentDidUpdate", "componentWillUnmount"]} />
      
      <BindEvents />
      
      <RenderingConditional />
      
      <NameForm/>
    </div>
  );
}

export default App;
