import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
      </div>
    );
  }
}

export default App;
