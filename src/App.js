import { ListGroup, ListGroupItem, NavLink } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Patrick Kelly</h1>
        <h2>Web Developer</h2>
        <ListGroup>
          <ListGroup.Item>727-364-4111</ListGroup.Item>
          <ListGroup.Item>patrick.kellyse@gmail.com</ListGroup.Item>
          <ListGroup.Item>Tampa Palms, Florida, USA</ListGroup.Item>
          <ListGroup.Item>Linkedin.com/in/Kuscko</ListGroup.Item>
          <ListGroup.Item>GitHub.com/Kuscko</ListGroup.Item>
        </ListGroup>
        <br></br>
      </header>
      <body>
        <div id='about'>
          <h2>About Me</h2>
          <p>Dynamic, professionally educated, and multifaceted software engineer. Capable of designing and developing secure web applications.</p>
          <p>While ensuring the best possible performance, quality, and responsiveness of applications. Able to evolve to meet shifting needs 
            and priorities. With a passion to build and maintain applications for long-term use.</p>
          <br></br>
        </div>

        <div id='education'>
          <h2>Education</h2>
          <ListGroup>
            <ListGroupItem>Pasco-Hernando State College: Associates in Science - Computer Programming and Analysis</ListGroupItem>
          </ListGroup>
          <br></br>
        </div>

        <div id='experience'>
          <h2>Experience</h2>
          <br></br>
          <h3>Automation Engineer</h3>
          <h4>Proforma / Tampa, FL / November 2021 - present</h4>
          <ListGroup>
            <ListGroupItem>Analyze requirements, design, and develop testing suites and an automation framework using the AGILE methodology and TDD approach.</ListGroupItem>
            <ListGroupItem>Develop and maintain automated tests using C# and Selenium.</ListGroupItem>
            <ListGroupItem>Prepare and maintain documentation for writen test cases.</ListGroupItem>
            <ListGroupItem>Perform manual testing as needed.</ListGroupItem>
            <ListGroupItem>Maintain and improve End-to-End controllers and services in the API.</ListGroupItem>
            <ListGroupItem>Created an Automation Framework using MSTest, and other iterations with NUnit and XUnit packages.</ListGroupItem>
            <ListGroupItem>Improved development speed and test reliabilty by ease of use up to 65% since 2021.</ListGroupItem>
            <ListGroupItem>Reduced runtime of all test suites by 50% and required resources by 44%.</ListGroupItem>
          </ListGroup>
          <br></br>
          <h3>Web Developer</h3>
          <h4><a href='https://lostsouls.org/'>Telesmatic Systems LLC</a> / Port Richey FL  / November 2022 - Present</h4>
          <ListGroup>
            <ListGroupItem>Assist in the development of authoring software on a full stack capacity utlizing web software such as React Js and Django.</ListGroupItem>
            <ListGroupItem>Designed complex data structures using the Django ORM and a MySql database.</ListGroupItem>
            <ListGroupItem>Designed and configured CI/CD piplines in GitLab.</ListGroupItem>
          </ListGroup><br></br>
          <h3>Computer Programmer</h3>
          <h4>Johnny on the Spot - Furniture Repair / Springhill, FL / September 2020 - September 2021</h4>
          <ListGroup>
            <ListGroupItem>Planned, Designed, Developed, and Maintained a contract management system that allowed this company to increase the outreach of its employees to individual clients.</ListGroupItem>
            <ListGroupItem>Created a tool to get the company's capability statement distributed.</ListGroupItem>
            <ListGroupItem>The CMS had a route customizer for day-to-day jobs based on employee locations.</ListGroupItem>
          </ListGroup>
          <h3>Freelance Developer</h3>
          <h4>Kuscko Productions / Remote / June 2015 - August 2020</h4>
          <ListGroup>
            <ListGroupItem>Provided custom scripting services, web application development and maintenance.</ListGroupItem>
            <ListGroupItem>Created a resource management system that reduced any downtime an application was running on a server.</ListGroupItem>
          </ListGroup>
        </div>

        <div id='skills'>
          <h2>Skills</h2>
          <ListGroup>
            <ListGroupItem>C#</ListGroupItem>
            <ListGroupItem>ASP.NET</ListGroupItem>
            <ListGroupItem>Entity Framework</ListGroupItem>
            <ListGroupItem>SQL Server</ListGroupItem>
            <ListGroupItem>HTML</ListGroupItem>
            <ListGroupItem>CSS</ListGroupItem>
            <ListGroupItem>JavaScript</ListGroupItem>
            <ListGroupItem>React</ListGroupItem>
            <ListGroupItem>Bootstrap</ListGroupItem>
            <ListGroupItem>Git</ListGroupItem>
            <ListGroupItem>Visual Studio</ListGroupItem>
            <ListGroupItem>Visual Studio Code</ListGroupItem>
            <ListGroupItem>Agile</ListGroupItem>
            <ListGroupItem>Test Driven Development</ListGroupItem>
            <ListGroupItem>Unit Testing</ListGroupItem>
            <ListGroupItem>Integration Testing</ListGroupItem>
            <ListGroupItem>Automated Testing</ListGroupItem>
            <ListGroupItem>Continuous Integration</ListGroupItem>
            <ListGroupItem>Continuous Delivery</ListGroupItem>
            <ListGroupItem>Continuous Deployment</ListGroupItem>
          </ListGroup>
        </div>
      </body>
    </div>
  );
}

export default App;
