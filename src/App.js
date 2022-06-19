import './App.css';
import NavBar from './COMPONENTS/NAV BAR/NavBar';
import HomePage from './COMPONENTS/HOME PAGE/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{fontFamily: 'Poppins'}}>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
