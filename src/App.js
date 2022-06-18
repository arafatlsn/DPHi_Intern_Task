import './App.css';
import NavBar from './COMPONENTS/NAV BAR/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './COMPONENTS/HOME PAGE/HomePage';

function App() {
  // console.log(new Date("July 20, 22 20:00").getTime())
  return (
    <div style={{fontFamily: 'Poppins'}}>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
