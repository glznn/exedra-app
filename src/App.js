import './App.css';
import LandingPage from './LandingPage';

function App() {

  return (
    <div className="App">
      <LandingPage />
      <div className="app__gradient">
      <h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </h1>
        <ul className="app__footer">
          <li id="pp" onClick={()=> {
            window.location.pathname = "/privacypolicy"
            }}>
              Privacy Policy
          </li>
          <li id="cu" onClick={()=> {
            window.location.pathname = "/contactus"
            }}>Contact Us</li>
        </ul>
        <br></br>
      </div>
    </div>
  );
}

export default App;
