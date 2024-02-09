// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bison:wght@400;700&display=swap"
        />
      </Helmet>
      {/* <header className="App-header">
       
      </header> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
