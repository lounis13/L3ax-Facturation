import logo from './logo.svg';
import './App.css';

/**
 * Appliacation
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img alt="react-log" src={logo} style={{width: "20%"}}/>
                <h1>L3AX Facturation</h1>
            </header>
        </div>
    );
}

export default App;
