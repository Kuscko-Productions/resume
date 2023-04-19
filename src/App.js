import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem, ThemeProvider } from 'react-bootstrap';
import { faGitSquare } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className='container'>
        <div id='info' className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-6 col-lg-7'>
              <h1>Patrick Kelly</h1>
              <h2>Software Developer</h2>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-5'>
              <h2>Contact</h2>
              <ListGroup variant='flush'>
                <ListGroupItem><FontAwesomeIcon icon={faPhone} size='lg'/> <a href='tel:+17273644111'>(727) 364-4111</a></ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faGlobe} size='lg'/> <a href='https://www.google.com/maps/place/Tampa+Palms,+Tampa,+FL/@28.0481853,-82.4365068,12z/data=!4m6!3m5!1s0x88c2b7f72210b7e5:0x61e9582cd056b9b2!8m2!3d28.0976718!4d-82.3985051!16s%2Fm%2F026nm4z'>Tampa Palms, Florida, USA</a></ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faAt} size='lg'/> <a href='mailto:contact@kuscko.com'>contact@kuscko.com</a></ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faAt} size='lg'/> <a href='https://www.linkedin.com/in/kuscko/'>linkedin.com/in/Kuscko</a></ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faGitSquare} size='lg'/> <a href='https://www.github.com/kuscko'>github.com/Kuscko</a></ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
        
        <div id='about' className='row'>
          <h2>About Me</h2>
          <p>Dynamic, professionally educated, and multifaceted software engineer. Capable of designing and developing secure web applications.</p>
          <p>While ensuring the best possible performance, quality, and responsiveness of applications. Able to evolve to meet shifting needs 
            and priorities. With a passion to build and maintain applications for long-term use.</p>
          <br></br>
        </div>

        

        <div className='row'>
          <div id='experience' className='col-sm-6 col-md-6 col-lg-9'>
            <h2>Experience</h2>
            <br></br>
            <div className='experience'>
              <h3>Automation Engineer</h3>
              <h4><a href='https://www.proforma.com'>Proforma</a> / Tampa, FL / November 2021 - present</h4>
              <ul>
                <li>Analyze requirements, design, and develop testing suites and an automation framework using the AGILE methodology and TDD approach.</li>
                <li>Develop and maintain automated tests using C# and Selenium.</li>
                <li>Prepare and maintain documentation for writen test cases.</li>
                <li>Perform manual testing as needed.</li>
                <li>Maintain and improve End-to-End controllers and services in the API.</li>
                <li>Created an Automation Framework using MSTest, and other iterations with NUnit and XUnit packages.</li>
                <li>Improved development speed and test reliabilty by ease of use up to 65% since 2021.</li>
                <li>Reduced runtime of all test suites by 50% and required resources by 44%.</li>
              </ul>
            </div>
            <br></br>
            <div className='experience'>
              <h3>Web Developer</h3>
              <h4><a href='https://lostsouls.org/'>Telesmatic Systems LLC</a> / Port Richey FL  / November 2022 - Present</h4>
              <ul>
                <li>Assist in the development of authoring software on a full stack capacity utlizing web software such as React Js and Django.</li>
                <li>Designed complex data structures using the Django ORM and a MySql database.</li>
                <li>Designed and configured CI/CD piplines in GitLab.</li>
              </ul>
            </div>
            <br></br>
            <div className='experience'>
              <h3>Computer Programmer</h3>
              <h4>Johnny on the Spot - Furniture Repair / Springhill, FL / September 2020 - September 2021</h4>
              <ul>
                <li>Planned, Designed, Developed, and Maintained a contract management system that allowed this company to increase the outreach of its employees to individual clients.</li>
                <li>Created a tool to get the company's capability statement distributed.</li>
                <li>The CMS had a route customizer for day-to-day jobs based on employee locations.</li>
              </ul>
            </div>
            <br></br>
            <div className='experience'>
              <h3>Freelance Developer</h3>
              <h4>Kuscko Productions / Remote / June 2015 - August 2020</h4>
              <ul>
                <li>Provided custom scripting services, web application development and maintenance.</li>
                <li>Created a resource management system that reduced any downtime an application was running on a server.</li>
              </ul>
            </div>
            <br></br>
          </div>
          <div id='skills' className='col-sm-6 col-md-6 col-lg-3'>
            <div id='education' className='row'>
              <h2>Education</h2>
              <p>Pasco-Hernando State College: Associates in Science - Computer Programming and Analysis</p>
            </div>
            <br></br>
            <h2>Skills</h2>
            <ul>
              <li>C#</li>
              <li>ASP.NET</li>
              <li>Entity Framework</li>
              <li>SQL Server</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Git</li>
              <li>Visual Studio</li>
              <li>Visual Studio Code</li>
              <li>Agile</li>
              <li>Test Driven Development</li>
              <li>Unit Testing</li>
              <li>Integration Testing</li>
              <li>Automated Testing</li>
              <li>Continuous Integration</li>
              <li>Continuous Delivery</li>
              <li>Continuous Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
