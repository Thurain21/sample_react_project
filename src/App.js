
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

var one = 3;
function App({data}) {

  if ( one == 3) {
    return (
      <>
      <Footer/>
      </>
    )
  } else {
    return (
      <>
      <Header/>
      </>
    )
  }
}

export default App;
