import './App.css';
import Content from './Content'
import Footer from './Footer'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      {/* <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> Not necessary to display. */}
        <Content />
        {/* </header> */}
      {/* </div> Removed this because it wasn't currently necessary to display. */ }
    </div>
    <Footer />
    </div>
    
  );
}

export default App;
