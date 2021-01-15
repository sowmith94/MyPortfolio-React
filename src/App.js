import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Banner from './components/Banner';
import Skills from './components/Skills';

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

  const projectList=[
    {
      name: 'Project 1',
      company: "The International Org",
      descp: 'did something and created a website for the addition of something. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt expedita vero debitis minima reiciendis nobis officiis harum a amet dolorum hic aspernatur esse ea ut modi, totam molestiae quo?'
    },
    {
      name: 'Project 2',
      company: "The very big company",
      descp: 'did something and created a website for the addition of something Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt expedita vero debitis minima reiciendis nobis officiis harum a amet dolorum hic aspernatur esse ea ut modi, totam molestiae quo?'
    },
    {
      name: 'Project 3',
      company: "The very big company",
      descp: 'did something and created a website for the addition of something Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt expedita vero debitis minima reiciendis nobis officiis harum a amet dolorum hic aspernatur esse ea ut modi, totam molestiae quo?'
    },
    {
      name: 'Project 3',
      company: "The very big company",
      descp: 'did something and created a website for the addition of something Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt expedita vero debitis minima reiciendis nobis officiis harum a amet dolorum hic aspernatur esse ea ut modi, totam molestiae quo?'
    },
  ]

  return (
    <div className="App">
      <Nav />
      <Banner personalInfo={personalInfo} />
      <About personalInfo={personalInfo}/>
      <Projects projectList={projectList}/>
      <Skills />
      <p></p>
    </div>
  );
}

export default App;
