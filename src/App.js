
import './App.css';
import Header from './components/Header';
import Title from './components/Title';

function App({data}) {
  return (
    <div className="App">
      <h1>Sample React App {data}</h1>
      <Header/>
    </div>
  );
}

export default App;
