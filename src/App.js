import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { faGitSquare } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

function App() {
  
  
  return (
    <div className='container'>
      <div id='info'>
        <div className='row'>
          <div id='name' className='col-sm-6 col-md-6 col-lg-7'>
            <h1>Patrick Kelly</h1>
            <h3>Software Developer</h3>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-5'>
            <h3>Contact</h3>
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

      <div className='row'>
        <div id='about' className='col-sm-9 col-md-9 col-lg-9'>
          <h3>About Me</h3>
          <p>Experienced software engineer with a passion for designing and developing secure web applications, 
            ensuring high performance, quality, and responsiveness. Adaptable to changing needs and committed to 
            building and maintaining applications for long-term use.</p>
        </div>
        <div id='education' className='col-sm-3 col-md-3 col-lg-3'>
          <h3>Education</h3>
          <p>Pasco-Hernando State College: Associates in Science - Computer Programming and Analysis</p>
        </div>
      </div>

      <div className='row'>
        <div id='experience'>
          <h3>Experience</h3>
          <div className='experience-details'>
            <h4>Automation Engineer</h4>
            <h5><a href='https://www.proforma.com'>Proforma</a> / Tampa, FL / November 2021 - present</h5>
            <ul>
              <li>Prepared and maintained documentation for written test cases to ensure comprehensive test coverage and effective communication within the team.</li>
              <li>Spearheaded the implementation of a new real-time test reporting system, resulting in increased productivity and faster issue resolution.</li>
              <li>Developed and applied a comprehensive QA process that significantly improved product quality and customer satisfaction.</li>
              <li>Developed and maintained automated tests using C# and Selenium to ensure consistent and efficient testing.</li>
              <li>Mentored and provided technical guidance to junior developers to improve overall team performance.</li>
              <li>Created an Automation Framework using MSTest, and other iterations with NUnit and XUnit packages.</li>
            </ul>
          </div>
          <div className='pagebreak'/>
          <div className='experience-details'>
            <h4>Web Developer</h4>
            <h5><a href='https://lostsouls.org/'>Telesmatic Systems LLC</a> / Port Richey FL  / November 2022 - Present</h5>
            <ul>
              <li>Collaborated in the full-stack development of authoring software using React Js and Django web frameworks.</li>
              <li>Engineered and implemented intricate data structures utilizing the Django ORM and a MySql database.</li>
              <li>Designed and set up continuous integration and delivery (CI/CD) pipelines utilizing GitLab for improved software development workflow.</li>
            </ul>
          </div>
          <div className='experience-details'>
            <h4>Computer Programmer</h4>
            <h5>Johnny on the Spot - Furniture Repair / Springhill, FL / September 2020 - September 2021</h5>
            <ul>
              <li>Led the development of a new contract management system resulting in a 50% increase in efficiency and a 20% reduction in costs.</li>
              <li>Troubleshot and resolved defects in existing software applications, resulting in improved system stability and reliability.</li>
              <li>Designed and implemented new data models and algorithms resulting in improved performance and scalability.</li>
            </ul>
          </div>
          <div className='experience-details'>
            <h4>Freelance Developer</h4>
            <h5>Kuscko Productions / Remote / June 2015 - August 2020</h5>
            <ul>
              <li>Collaborated with clients to understand their business needs and requirements, delivering solutions that met or exceeded expectations.</li>
              <li>Developed and maintained multiple custom web applications resulting in increased customer satisfaction and repeat business.</li>
              <li>Worked independently and managed projects from conception to delivery, ensuring timely and successful outcomes.</li>
              <li>Utilized best practices in software development to create scalable and maintainable code.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
        <div id='skills'>
          <h3>Skills</h3>
          <div id='skill-list'>
            <div className='d-flex justify-content-start'>
              <ul>
                <li>C#</li>
                <li>ASP.NET</li>
                <li>Entity Framework</li>
                <li>SQL Server</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className='d-flex justify-content-center'>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>Agile</li>
                <li>Test Driven Development</li>
              </ul>
            </div>
            <div className='d-flex justify-content-end'>
              <ul>
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
      </div>
    </div>
  );
}

export default App;
