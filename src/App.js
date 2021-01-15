import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Banner from './components/Banner';

function App() {
  const personalInfo={
    fullname: 'Marium Ali',
    occupation: 'Student',
    Skills: ['html','css','reactjs','c++','javascript'],
    facebook: 'https://www.facebook.com',
    linkedin:'https://www.linkedin.com',
    github: 'https://www.github.com',
    address: 'H No: 123, Some Street, Hyderabad, TS, India',
    email: 'someone@something.com'
  }

  return (
    <div className="App">
      <Nav />
      <Banner personalInfo={personalInfo} />
      <About personalInfo={personalInfo}/>
      <Projects />
    </div>
  );
}

export default App;
