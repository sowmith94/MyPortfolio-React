import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const personalInfo={
    fullname: 'Marium Ali',
    occupation: 'Student',
    skillList: [
      {
      name: 'html',
      level: 80
      },
      {
        name: 'css',
        level: 85,
      },
      {
        name:'reactjs',
        level: 80,
      },
      {
        name:'c++',
        level: 75
      },
      {
        name:'javascript',
        level: 80
      }
    ],
    facebook: 'https://www.facebook.com',
    linkedin:'https://www.linkedin.com',
    github: 'https://www.github.com/marium19',
    address: 'H No: 123, Some Street, Hyderabad, TS, India',
    email: 'mariumali19@something.com'
  }

  const projectList=[
    {
      name: 'Website development for EMCC',
      company: "The Engineer's Music and Cultural Club",
      descp: 'Worked as a part of a team to develop the website for the Engineer’s Music and Culture Club. The website was developed using HTML, CSS, JavaScript,BootStrap. '
    },
    {
      name: 'Quiz website',
      company: "The very big company",
      descp: 'Created a quiz website using JQuery, JavaScript by fetching the quiz questions from an API using fetch. Includes a leader board page that displays the high scores of the top 5 quiz takers.'
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
      <Skills personalInfo={personalInfo}/>
      <Footer personalInfo={personalInfo}/>
      <p></p>
    </div>
  );
}

export default App;
