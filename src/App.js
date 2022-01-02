import './App.css';
import Home from './Widgets/Home/Home';
import Calculator from './Widgets/Calculator/calculator';
import WelcomeScreen from './Widgets/WelcomeScreen/WelcomeScreen';

function App() {
  return (
    <div className="App">
      <WelcomeScreen userName={'Indrajit Nag'}/>
      <Calculator/>
      <Home />
    </div>
  );
}

export default App;
