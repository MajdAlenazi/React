const react1 = document.getElementById("root");

let element = (
  <>
    {/*  info section */}

    <div className="text">
      <h1>MAJD THANI ALENAZI</h1>
      <h3>Front End Developer</h3>
      <p className="info">
        Majdthani@gmail.com | +966 565411356 | Saudi Arabia, Riyadh | LinkedIn :
        majd-alenazi
      </p>
    </div>

    {/* End info section */}

    {/* summary section */}

    <h4>Summary</h4>

    <div className="summary">
      <p>
        A job in a suitable environment, in which I can serve your organization,
        and to establish a promising career for myself as well, also to utilize
        know- edge and skills I have to contribute to the progress and success.
      </p>
    </div>
    {/* End summary section */}

    {/* experience section */}

    <h4>Experience </h4>
    <div className="experience">
      <p>
        <strong>CO-OP Training |</strong> TAHAKOM |06/2022 - 08/2022
      </p>

      <ul className="column-list">
        <li>Front end developer a website.</li>
      </ul>
    </div>
    {/* End experience section */}

    {/*  education section */}
    <h4>Education</h4>
    <div className="education">
      <strong>Imam Mohammad Ibn Saud Islamic University | RIYADH | 2022</strong>
      <p>
        Bachelor's degree of Information Technology: GPA: 4.55\5 with Second
        Class Honors
      </p>
    </div>
    {/* End education section */}

    {/*project section */}

    <h4>Projects</h4>
    <div className="Projects">
      <ul>
        <li>
          <strong>Project Graduate:</strong>
        </li>
      </ul>
      <p>
        Developing and implementation two gloves for visual disability people
        connection with a mobile application. The project allows and help them
        to write a word without intervening from others.
      </p>
      <ul>
        <li>
          <strong>JavaScript Bootcamp Project :</strong>
        </li>
      </ul>
      <p>" Kitabi":</p>
      <p>Designed with Figma and implemented by Front End.</p>
    </div>
    {/* End project section */}

    {/* Training section */}

    <h4>Training Courses</h4>
    <div className="traingS">
      <ul>
        <li>
          <strong>Front End Development.</strong>
        </li>
      </ul>

      <p>September 2022 (20 Hours).</p>

      <ul>
        <li>
          <strong>JavaScript Bootcamp.</strong>
        </li>
      </ul>
      <p>September 2023 (200 Hours).</p>

      <ul>
        <li>
          <strong>Web Development Bootcamp.</strong>
        </li>
      </ul>
      <p>November 2022 (60 Hours) .</p>
    </div>
    {/* End Training section */}
    <h4>Skills </h4>
    {/* Skills section */}

    <div className="skillsStyle">
      <ul>
        <p>
          <strong>Soft skills:</strong>
        </p>
        <li>Communication.</li>
        <li>Critical thinking.</li>
        <li>Fast learner.</li>
        <li>Teamwork.</li>
        <li>Problem solving.</li>

        <p>
          <strong>Technical skills:</strong>
        </p>
        <li>Java, HTML.</li>
        <li>CSS, JavaScript.</li>
        <li>Bootstraps.</li>
        <li>Microsoft Office.</li>
      </ul>
    </div>
    {/* End Skills section */}

    {/* languages section */}
    <h4>Languages</h4>

    <div className="languagesSt">
      <ul>
        <li>Arabic</li>
        <li>English.</li>
      </ul>
    </div>
    {/* End languages section */}
  </>
);

ReactDOM.render(element, react1);
