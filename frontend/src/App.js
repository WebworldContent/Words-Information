import './App.css';
import Quotes from './Components/Quotes';
import Words from './Components/Words';
import logo from './assets/logo.png';
 
function App() {
  return (
    <div className='main'>
      <img className="logo" alt='word world' src={logo} />
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
