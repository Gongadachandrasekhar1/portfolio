import "./Resume.css";
import NavBar from "./Nav";
import Footer from "./footer";

export default function Resume() {
  return (
    <div>
      <NavBar />
      <div className="mt-5" id="resume">
        <h1 className="text-center">RESUME</h1>
        <div className="container Resume mt-5 ">
          <div className="resume-header text-center text-wrap pt-4">
            <h1>Chandra Sekhar Gongada</h1>
            <p>
              Parvathi Puram, Andhra Pradesh, 532501 | 7893399798 |
              <a
                href="mailto:gongadachandu770299@gmail.com"
                className="text-decoration-none"
              >
                gongadachandu770299@gmail.com
              </a>
              <span>| </span>
              <a
                href="http://www.linkedin.com/in/chandra-sekhar-gongada-80b8b0243"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
          <hr />
          <div className="main-container ms-2">
            <div className="education">
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>Bachelor of Technology:</strong> Dr B R Ambedkar
                  University College of Engineering, Srikakulam (May 2024) - 78%
                </li>
                <li>
                  <strong>Intermediate (XII):</strong> Narayana Junior College,
                  Visakhapatnam (Feb 2020) - 89%
                </li>
                <li>
                  <strong>Secondary Education (X):</strong> Zilla Parishad High
                  School, Vizianagaram (March 2018) - 83%
                </li>
              </ul>
            </div>
            <hr />

            <div className="skills">
              <h2>Skills</h2>
              <div className="row">
                <div className="col-md-6">
                  <h4>Backend</h4>
                  <ul>
                    <li>
                      - Python, Object Oriented programming (OOPs ), Data
                      Structure, Node.js, Ejs, Rest API's, Middle wares.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Frontend</h4>
                  <ul>
                    <li> - HTML, CSS, JavaScript, React.js</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Frameworks</h4>
                  <ul>
                    <li> - Express.js, Bootstrap</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Database</h4>
                  <ul>
                    <li> - MySQL, Stored Procedures, Triggers, MongoDB</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>SDLC</h4>
                  <ul>
                    <li> - Software development life cycle.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Tools</h4>
                  <ul>
                    <li>
                      - MS-Word, MS-Excel, PowerPoint, Git, Git Bash, Linux
                      operating system
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Soft Skills</h4>
                  <ul>
                    <li>
                      - Problem solving, Management Good time management skills,
                      Good written & verbal communication skills, Teamwork &
                      collaboration, Problem solving skills, Creative thinking,
                      Strong analytical skills, Critical thinking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="projects ">
              <h2>Projects</h2>
              <div>
                <h4>Campus Connect Application</h4>
                <p className="row">
                  <span>
                    ● Developed a comprehensive mobile application for
                    engineering college students to access their essential
                    details effortlessly.
                  </span>
                  <span>
                    The app Provides Results, College Fee, Previous year Papers,
                    Syllabus Papers.
                  </span>
                  <span>
                    ● The application was developed using UI/UX design, Flutter,
                    Dart, MySQL database management.
                  </span>
                  <span>
                    ● "I am done this project using Agile methodology, covering
                    all phases of the Software Development Life Cycle (SDLC),
                    including planning, design, implementation, testing,
                    deployment, and maintenance.
                  </span>
                  <span>
                    ● This application was completed in February 2024 to April
                    2024.
                  </span>
                </p>
              </div>
              <div>
                <h4>Responsive Weather Website</h4>
                <p className="row">
                  <span>
                    ● I developed a weather-based website designed to provide
                    users with real-time weather information. The site features
                    current weather conditions, forecasts, and historical
                    weather data for various locations."
                  </span>
                  <span>
                    ● The website was built using HTML, CSS, Bootstrap,
                    JavaScript and React.js. I used weather “Open weather map”
                    API to fetch real-time weather data.
                  </span>
                  <span>
                    ● I am done this project using Waterfall methodology,
                    covering all phases of the SDLC.
                  </span>
                  <span>
                    ● This website was completed in May 2024 to June 2024
                  </span>
                </p>
              </div>
            </div>
            <hr />

            <div className="certificates">
              <h2>Certificates</h2>
              <ul>
                <li className="row">
                  <span>
                    ✔ Microsoft Technology Associate for Introduction to
                    Programming using Python
                  </span>
                  <span>✔ Certified by Hacker Rank for MySQL</span>
                  <span>✔ Certified by Hacker Rank for Java (Basic)</span>
                </li>
              </ul>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
