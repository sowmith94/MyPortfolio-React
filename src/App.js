import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Banner from './components/Banner';

function App() {
  const personalInfo={
    fullname: 'Marium Ali',
    occupation: 'Student',
    Skills: ['html','css','reactjs','c++','javascript']
  }

  return (
    <div className="App">
      <Nav />
      <Banner fullname={personalInfo.fullname} />
      <About />
      <Projects />
    </div>
  );
}

export default App;
