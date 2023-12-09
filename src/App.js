import './App.css';
import Quotes from './Components/Quotes';
import Words from './Components/Words';
function App() {
  return (
    <div className='main'>
      <h1 style={{fontFamily: 'sans-serif', color: '#a0ff3e', textTransform: 'uppercase'}}>Words Information</h1>
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
