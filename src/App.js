import './App.css';
import Quotes from './Components/Quotes';
import Words from './Components/Words';
function App() {
  return (
    <div className='main'>
      <h1>Words Information</h1>
      <div className='quotes'>
        <Quotes/>
      </div>
      <div className='word-meaning'>
        <Words/>
      </div>
    </div>
  );
}

export default App;
