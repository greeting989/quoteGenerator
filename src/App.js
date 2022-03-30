
import logo from "./images/quotegenerator.PNG";
import './App.css';
import Outerdiv from "./components/Outerdiv";
import pen from "./images/pen.png";
function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} width="190px" height="80px" className="logo"/>
      </nav>
      <div className="box">
        <Outerdiv/>
        <img src={pen} alt="pen" className="pen"/>
      </div>
       
    </div>
  );
}

export default App;
