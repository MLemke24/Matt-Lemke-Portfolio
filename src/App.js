import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [projects] = useState([
    {
      name: 'Nerd-Words',
      description: 'Nerd Words is a game that tests your memory and vocabulary at the same time! See a word for one second, then try to spell that word you just saw. Win or lose, you get the word definition to add more words to your vocabulary.',
    },
    { name: 'Tech-Blog', description: 'Tech Blog is a place where you can sign up and talk all things tech!' },
    { name: 'Rate-Your-Bootcamp', description: 'With bootcamps popping up everywhere, Rate Your Bootcamp allows you to leave a review for prospective students to get the real 411 behind what they are paying for.' },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

 return(
   <main>
     <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      ></Nav>
     <About></About>
     <Projects currentProject={currentProject}></Projects>
     <ContactForm />
   </main>
 )
}

export default App;
