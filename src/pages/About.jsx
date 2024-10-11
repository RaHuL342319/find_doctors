import "./About.css"; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Doctors App</h1>
      <p>
        Welcome to our Doctors App, your trusted resource for finding qualified
        healthcare professionals. Our mission is to connect patients with the
        best doctors in their area, making healthcare accessible and convenient.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Search for doctors by name, specialty, or location.</li>
        <li>
          Filter results by specialty and location to find the right match.
        </li>
        <li>
          View detailed profiles of doctors, including ratings and contact
          information.
        </li>
        <li>
          Get real-time updates and notifications about your healthcare needs.
        </li>
      </ul>

      <h2>Meet Our Team</h2>
      <p>
        Our dedicated team consists of healthcare professionals and tech
        enthusiasts who are passionate about improving the healthcare
        experience. We work hard to ensure that our app is user-friendly and
        meets the needs of our users.
      </p>
      <ul>
        <li>Jane Doe - Founder & CEO</li>
        <li>John Smith - CTO</li>
        <li>Emily Johnson - UX/UI Designer</li>
        <li>Michael Brown - Lead Developer</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions, suggestions,
        or feedback, please reach out to us at{" "}
        <a href="mailto:info@doctorsapp.com">info@doctorsapp.com</a>.
      </p>
    </div>
  );
};

export default About;
