import './App.css';
import Calculator from './Widgets/Calculator/calculator';
import WelcomeScreen from './Widgets/WelcomeScreen/WelcomeScreen';

function App() {
  return (
    <div className="App">
      <WelcomeScreen userName={'Indrajit Nag'}/>
      <Calculator/>
    </div>
  );
}

export default App;
